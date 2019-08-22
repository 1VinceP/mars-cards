<script>
import { mapGetters, mapMutations } from 'vuex';
import orderBy from 'lodash/orderBy';
import DiamondIcon from 'icons/Diamond.vue';
import HeartIcon from 'icons/Heart.vue';

import { UPGRADE } from '../state/types';
// import charactersList from '../assets/characters';
import BaseAction from './BaseAction.vue';

export default {
  props: { setCharacter: Function },

  data: () => ({
    current: 0,
    // characters: Object.values(charactersList),
  }),

  computed: {
    character() {
      const currentCharacter = this.characters[this.current];
      return {
        ...currentCharacter,
        upgradeCost: currentCharacter.level * 200,
        allActions: orderBy([...currentCharacter.actions, ...currentCharacter.bonusActions], 'cost'),
      };
    },

    ...mapGetters({ characters: 'characterList' }),
  },

  methods: {
    prevChar() {
      this.current = this.current === 0
        ? this.characters.length - 1
        : this.current - 1;
    },
    nextChar() {
      this.current = this.current === this.characters.length - 1
        ? 0
        : this.current + 1;
    },

    ...mapMutations([UPGRADE]),
  },

  components: { DiamondIcon, HeartIcon, BaseAction },
};
</script>

<template>
  <div class="menu">
    <h1 class="title">{{ character.name }}</h1>
    <div class="subtitle">
      <div>Level:
        <span v-if="character.unlocked">{{ character.level }}</span>
        <span v-else>0</span>
      </div>
      <div>Highscore: {{ character.highScore }}</div>
    </div>

    <div class="image">
      <button class="triangle left" @click="prevChar" />
      <img :src="character.image" />
      <button class="triangle right" @click="nextChar" />
    </div>

    <div v-if="!character.unlocked" class="utilBar purchase">
      <div class="health utilBarItem">
        <HeartIcon />
        <span>{{ character.health }}</span>
      </div>

      <button class="utilBarItem">Purchase</button>

      <div class="utilBarItem">
        <DiamondIcon />
        <span>{{ character.cost }}</span>
      </div>
    </div>
    <div v-else class="utilBar upgrade">
      <div class="health utilBarItem">
        <HeartIcon />
        <span>{{ character.health }}</span>
      </div>

      <button
        class="utilBarItem"
        @click="UPGRADE({ amount: character.upgradeCost, charNameId: character.nameId })"
      >
        Upgrade
      </button>

      <div class="utilBarItem">
        <DiamondIcon />
        <span>{{ character.upgradeCost }}</span>
      </div>
    </div>

    <div class="description">{{ character.description }}</div>

    <div class="actions">
      <BaseAction v-for="action in character.allActions" :key="action.id" :action="action" />
    </div>

    <button v-if="character.unlocked" @click="$emit('setCharacter', character)">Select</button>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;
  background: #E77D11;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
  border: 2px solid #451804;
  border-radius: 8px;
  color: #fff;
}

.title {
  font-size: 24px;
  margin-bottom: 4px;
}

.subtitle {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 4px;
}

.image {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .triangle {
    width: 0;
    height: 0;
    background: transparent;
    border-top: 26px solid transparent;
    border-bottom: 26px solid transparent;
    &.left {
      border-left: 0px solid transparent;
      border-right: 26px solid #451804;
    }
    &.right {
      border-right: 0px solid transparent;
      border-left: 26px solid #451804;
    }
  }
}

.utilBar {
  width: 100%;
  display: flex;
  // justify-content: space-between;
  & .utilBarItem {
    flex: 1;
  }
}

.health {
  margin-bottom: 4px;
}

.description {
  max-height: 74px;
  height: 74px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
  font-size: 18px;
  overflow-y: scroll;
}

.actions {
  height: 180px;
  max-height: 180px;
  width: 100%;
  overflow-y: scroll;
  margin-bottom: 10px;
}
</style>
