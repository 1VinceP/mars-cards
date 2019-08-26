<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import DiamondIcon from 'icons/Diamond.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseRadio from '@/components/BaseRadio.vue';
import { SET_GAME_PROP } from '@/state/types';

export default {
  computed: {
    ...mapState('game', {
      bank: 'playerBank',
      ship: 'activeShip',
      gameMode: 'gameMode',
      endless: 'endless',
    }),
    ...mapGetters('game', ['gameModeList']),
  },

  methods: {
    ...mapMutations('game', [SET_GAME_PROP]),
    selected(mode) {
      if (mode.nameId === 'endless') {
        return this.endless;
      }
      return this.gameMode === mode.nameId;
    },
  },

  components: {
    BaseButton,
    BaseRadio,
    DiamondIcon,
  },
};
</script>

<template>
  <div class="level-header">
    <section class="top">
      <div class="bank">
        <DiamondIcon />
        <span>{{ bank }}</span>
      </div>
      <div>
        Active: {{ ship.name }}
      </div>
    </section>

    <section class="game-modes">
      <div v-for="mode in gameModeList" :key="mode.nameId">
        <BaseRadio
          :label="mode.name"
          :selected="selected(mode)"
          :disabled="!mode.unlocked"
          @click="SET_GAME_PROP(['gameMode', mode.nameId])"
        />
      </div>
    </section>

    <section class="navigation">
      <BaseButton
        :label="'Menu'"
        @click="SET_GAME_PROP(['gameState', 'menu'])"
        small
      />
      <BaseButton
        :label="'Play'"
        @click="SET_GAME_PROP(['gameState', 'grid'])"
        small
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.level-header {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }
  & .game-modes {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & .radio { margin-bottom: 6px; }
  }

  & .navigation {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & .base-button { width: 45%; }
  }
}
</style>
