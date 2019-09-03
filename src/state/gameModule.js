/* eslint-disable brace-style */
import orderBy from 'lodash/orderBy';
import toastr from 'toastr';
import * as types from './types';
import achievements from '../assets/achievements';
import { ships as astroShips } from '../assets/astronauts';
import { ships as alienShips } from '../assets/aliens';
import gameModes from '../assets/gameModes';
import {
  buildDeck, buildGrid, checkCanAttack, checkCanInteract,
  drawCard, getGameIndices, handleKill, setCoords,
  // checkNeighbor,
} from '@/utils';
import * as Actions from '@/constants/actions.constants';

const initialState = () => ({
  gameState: 'menu',
  playerBank: 200000,
  activeShip: { name: '' },
  faction: 'astronauts',
  // current game
  missionReport: 'success',
  score: 0,
  blueScore: 0,
  endless: false,
  gameMode: 'strike',
  level: {},
  deck: [],
  grid: [],
  activeAction: {},
  records: {
    kills: 0,
    bossKills: 0,
    structuresDestroyed: 0,
    damageDealt: 0,
    damageTaken: 0,
    healthHealed: 0,
    actionsUsed: 0,
    blueCrystalsCollected: 0,
    tilesRemoved: 0,
    missionsCompleted: 0,
    timesCaptured: 0,
    gamesPlayed: 0,
  },

  // User data storage
  achievements: { ...achievements },
  ships: { ...astroShips, ...alienShips },
  gameModes: { ...gameModes },
});

export default {
  namespaced: true,
  state: initialState,

  getters: {
    achievementsList: state => (
      orderBy(Object.values(state.achievements), ['unlocked', 'name'], 'asc')
    ),

    shipList: state => Object.values(state.ships)
      .filter(char => !char.hidden)
      .filter(char => !char.isSwapModule)
      .filter(char => char.faction === state.faction)
      .map(char => ({
        ...char,
        upgradeCost: ((char.baseUpgradeCost / 2) * (2 ** char.level)),
        allActions: orderBy([...char.actions, ...char.bonusActions], 'cost'),
      })),

    gameModeList: state => Object.values(state.gameModes),

    deckSize: state => state.deck.length,
  },

  mutations: {
    reset: state => {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },

    [types.LOAD_USER_GAME]: (state, game) => {
      Object.keys(game).forEach(key => {
        state[key] = game[key];
      });
    },

    [types.UPGRADE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        const ship = state.ships[charNameId];
        state.playerBank -= amount;
        ++ship.health;
        ++ship.level;

        achievements.topTier.method = { level: ship.level, faction: ship.faction };
        achievements.eliteRank.method = { level: ship.level, faction: ship.faction };

        if (ship.swapTo) {
          ship.swapTo.forEach(swap => {
            ++state.ships[swap].health;
            ++state.ships[swap].level;
          });
        }
      }
    },

    [types.PURCHASE]: (state, { amount, charNameId }) => {
      if (state.playerBank - amount >= 0) {
        const ship = state.ships[charNameId];
        state.playerBank -= amount;
        ship.unlocked = true;
        ship.level = 1;

        state.achievements.promoted.method = true;

        if (ship.swapTo) {
          ship.swapTo.forEach(swap => {
            state.ships[swap].unlocked = true;
            state.ships[swap].level = 1;
          });
        }
      }
    },

    [types.SET_ACTION]: (state, { action, charNameId }) => {
      if (action.bonus) return;

      const ship = { ...state.ships[charNameId] };
      const actionIndex = ship.selectedActions.findIndex(a => a.nameId === action.nameId);
      if (actionIndex >= 0) {
        ship.selectedActions.splice(actionIndex, 1);
      } else if (ship.selectedActions.length < ship.actionLimit) {
        ship.selectedActions.push(action);
      }
      state.ships[charNameId] = ship;
    },

    [types.SET_GAME_PROP]: (state, [prop, value]) => {
      if (prop === 'gameMode' && value === 'endless') {
        state.endless = !state.endless;
      } else if (prop === 'activeShip') {
        const {
          name, nameId, health, bonusActions, selectedActions, image, faction,
        } = value;
        state[prop] = {
          name,
          nameId,
          faction,
          image,
          health,
          maxHealth: health,
          ammo: 0,
          weapon: '',
          ammoType: '',
          bonusActions,
          selectedActions,
          coords: { x: 1, y: 1 },
        };
      } else {
        state[prop] = value;
      }
    },

    [types.START_GAME]: (state, { level }) => {
      state.gameState = 'grid';
      state.level = level;
      state.activeShip = {
        ...state.activeShip,
        ammo: level.ammo,
        weapon: level.weapon,
        ammoType: level.ammoType,
      };

      // last argument is an array of required cards to include (by nameId)
      const deck = buildDeck(level, state.gameMode, state.faction, []);
      const gridSize = level.gridX * level.gridY;
      const starters = deck.splice(0, gridSize - 1);
      state.deck = deck;
      state.grid = buildGrid(level.grid, state.activeShip, starters);
    },

    movePlayer(state, { player, target, canInteract: direction }) {
      const { pIndex, tIndex, nextIndices } = getGameIndices(state.grid, player, target, direction);
      console.log(nextIndices);

      // put player in target spot
      state.grid.splice(tIndex, 1, {
        coords: { ...target.coords },
        content: player,
        player: true,
      });

      // move card into player spot
      nextIndices.forEach((tileIndex, i, arr) => {
        console.log(tileIndex);
        if (tileIndex >= 0) {
          const shiftTile = state.grid[tileIndex];
          state.grid.splice(tileIndex, 1, {
            coords: i === 0 ? { ...player.coords } : { ...arr[i - 1].coords },
            content: { ...shiftTile.content },
            player: false,
          });
        } else { // if previous card was on the edge
          const targetSpace = arr[i - 1] ? arr[i - 1] : pIndex;
          state.grid.splice(targetSpace, 1, {
            coords: targetSpace === pIndex ? { ...player.coords } : { ...arr[i - 1].coords },
            content: drawCard(state.deck),
            player: false,
          });
        }
      });
      // if (sIndex >= 0) {
      //   const shiftTile = state.grid[sIndex];
      //   state.grid.splice(pIndex, 1, {
      //     coords: { ...player.coords },
      //     content: { ...shiftTile.content },
      //     player: false,
      //   });
      //   // draw new card from deck
      //   state.grid.splice(sIndex, 1, {
      //     ...shiftTile,
      //     content: drawCard(state.deck),
      //   });
      // } else {
      //   // draw new card from deck
      //   state.grid.splice(pIndex, 1, {
      //     coords: { ...player.coords },
      //     content: drawCard(state.deck),
      //     player: false,
      //   });
      // }
      state.activeShip.coords = target.coords;

      // handle effects of target
      if (target.type === 'crystal') {
        state.score += target.value;
        ++state.blueScore;
      }
      else if (target.type === 'ammo') {
        state.activeShip.ammo = target.value;
        state.activeShip.weapon = target.nameId;
        state.activeShip.ammoType = target.ammoType;
      }
      else if (target.type === 'enemy') {
        state.activeShip.health -= target.health;
        // records
        state.records.damageTaken += target.health;
      }
      else if (target.type === 'structure' && target.faction !== 'neutral') {
        const effect = player.faction === target.faction ? 'good' : 'bad';
        const { props: [first, second], value } = target.resolve(effect, player, state);
        if (second) {
          state[first][second] = value;
        } else {
          state[first] = value;
        }
        // records
        if (second === 'health') {
          if (effect === 'good') state.records.healthHealed += target.value;
          else state.records.damageTaken += target.value;
        }
      }
      else if (target.type === 'weather') {
        if (target.target === 'grid') {
          state.grid = target.resolve(state.grid);
          const { grid, playerCoords } = setCoords(state.grid, state.level.grid);
          state.grid = grid;
          state.activeShip.coords = playerCoords;
        }
        else {
          if (target.nameId === 'solarStorm') {
            state.activeShip.health = target.value;
          }
          state.grid.forEach((tile, i) => {
            state.grid[i].content = handleKill(target.resolve(state.grid, tile));
          });
        }
      }

      // records
      if (target.nameId !== 'empty') {
        ++state.records.tilesRemoved;
      }
    },

    attackTarget(state, { player, target }) {
      const { tIndex } = getGameIndices(state.grid, player, target);
      const targetTile = state.grid[tIndex];

      const newHealth = targetTile.content.health - player.ammo;
      const newAmmo = state.activeShip.ammo - targetTile.content.health;
      const damageDealt = state.activeShip.ammo - newAmmo;
      targetTile.content.health = newHealth;
      state.activeShip.ammo = newAmmo;
      if (state.activeShip.ammo < 0) {
        state.activeShip.ammo = 0;
      }

      // records
      state.records.damageDealt += damageDealt;
      if (targetTile.content.health <= 0 && targetTile.content.type === 'enemy') {
        if (targetTile.content.nameId.includes('boss')) {
          ++state.records.bossKills;
        } else {
          ++state.records.kills;
        }
      } else if (targetTile.content.health <= 0 && targetTile.content.type === 'structure') {
        ++state.records.structuresDestroyed;
      }
      // end records

      targetTile.content = { ...handleKill(targetTile) };

      if (targetTile.content.type === 'enemy' && state.activeShip.ammoType === 'caustic') {
        targetTile.content.poisonCount = 5;
      }
    },

    mineField(state, {
      player, target, canInteract, commit,
    }) {
      const { tIndex } = getGameIndices(state.grid, player, target);
      const targetTile = state.grid[tIndex];

      const shouldMove = targetTile.content.health === 1;
      state.score += target.value;
      targetTile.content.health -= 1;

      if (shouldMove) {
        commit('movePlayer', { player, target, canInteract });
      }
    },

    // useAction(state, { player, target }) {
    //   const indices = getGameIndices(state.grid, player, target);
    //   const isNeighbor = checkNeighbor(player, target);
    //   // const { newPlayer, newTarget } = state.activeAction.resolve(player, target, isNeighbor);
    //   const success = state.activeAction.resolve(state, player, target, indices, isNeighbor);
    //   if (success) {
    //     state.blueScore -= state.activeAction.cost;
    //     state.activeAction = {};
    //   }
    // },
  },

  actions: {
    [types.CATCH_TILE_CLICK]: ({ state, commit }, { tile }) => {
      const player = state.activeShip;
      const target = { ...tile.content, coords: { ...tile.coords } };
      let canInteract = false;
      let choice;

      if (state.activeAction.nameId) {
        canInteract = true;
        choice = Actions.Action;
      } else {
        canInteract = checkCanInteract(player, target);
        choice = checkCanAttack(player, target) ? Actions.Attack : Actions.Move;
      }

      if (!canInteract) {
        toastr.error('You cannot move there');
        return null;
      }

      if (canInteract === 'crystalField') {
        commit('mineField', { player, target, canInteract, commit });
      } else if (choice === Actions.Move) {
        commit('movePlayer', { player, target, canInteract });
      } else if (choice === Actions.Attack) {
        commit('attackTarget', { player, target });
      } else if (choice === Actions.Action) {
        // commit('useAction', { player, target });
      }

      if (state.activeShip.health <= 0) {
        toastr.error('YOU DIED');
        commit(types.SET_GAME_PROP, ['missionReport', 'captured']);
        setTimeout(() => {
          commit(types.SET_GAME_PROP, ['gameState', 'debrief']);
        }, 1000);
        return null;
      }

      const check = state.grid.every(({ content: { nameId, type }, player: isPlayer }) => (
        nameId === 'mountain'
          || nameId === 'cliff'
          || nameId === 'empty'
          || type === 'weather'
          || type === 'ammo'
          || isPlayer
      ));

      if (check) {
        toastr.success('You win!');
        commit(types.SET_GAME_PROP, ['gameState', 'debrief']);
      }

      return null;
    },

    [types.END_GAME]: ({ state, commit, dispatch, rootState }) => {
      state.playerBank += state.score;
      state.records.gamesPlayed = 1;
      state.records.missionCompleted = state.missionReport === 'success' ? 1 : 0;
      state.records.timesCaptured = state.missionReport === 'captured' ? 1 : 0;
      commit(
        `records/${types.UPDATE_RECORD_BATCH}`,
        {
          records: state.records,
          score: state.score,
          mode: state.gameMode,
          endless: state.endless,
        },
        { root: true },
      );

      if (rootState.user.username) {
        dispatch(types.SAVE_USER, {}, { root: true });
      }

      // reset state
      state.score = 0;
      state.blueScore = 0;
      state.endless = false;
      state.gameMode = 'strike';
      state.level = {};
      state.deck = [];
      state.grid = [];
      state.activeAction = {};
      state.records = {
        kills: 0,
        bossKills: 0,
        structuresDestroyed: 0,
        damageDealt: 0,
        damageTaken: 0,
        healthHealed: 0,
        actionsUsed: 0,
        blueCrystalsCollected: 0,
        tilesRemoved: 0,
        missionsCompleted: 0,
        timesCaptured: 0,
        gamesPlayed: 0,
      };

      state.gameState = 'menu';
    },
  },
};
