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
      <BaseButton
        small
        :label="'Back'"
        @click="SET_GAME_PROP(['gameState', 'menu'])"
      />
      <div class="bank">
        <DiamondIcon />
        <span>{{ bank }}</span>
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
    align-items: center;
    margin-bottom: 6px;
    padding: 0 6px;
    font-size: 18px;
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
