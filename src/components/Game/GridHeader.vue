<script>
import { mapMutations, mapState } from 'vuex';
import orderBy from 'lodash/orderBy';
import DiamondIcon from 'icons/Diamond.vue';
import { SET_GAME_PROP } from '@/state/types';
import BaseActionDot from './BaseActionDot.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'GridHeader',
  computed: {
    ...mapState('game', ['activeShip', 'score', 'blueScore']),
    ...mapState('options', ['actionOrder']),
    availableActions() {
      return orderBy(
        [...this.activeShip.bonusActions, ...this.activeShip.selectedActions],
        this.actionOrder,
      );
    },
  },

  methods: {
    ...mapMutations('game', [SET_GAME_PROP]),
  },

  components: { BaseButton, DiamondIcon, BaseActionDot },
};
</script>

<template>
  <div class="grid-header">
    <section class="top">
      <BaseButton
        :label="'Quit'"
        @click="SET_GAME_PROP(['gameState', 'menu'])"
        small
      />
      <span>
        <DiamondIcon class="blue-diamond" />
        {{ blueScore }}
      </span>
      <span>
        <DiamondIcon />
        {{ score }}
      </span>
    </section>

    <section class="actions">
      <BaseActionDot
        v-for="action in availableActions"
        :key="action.id"
        :action="action"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.grid-header {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .top {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    padding: 0 6px;
    font-size: 18px;
    & .blue-diamond { color: var(--blue); }
  }
  & .actions {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
