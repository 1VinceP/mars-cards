<script>
import { mapMutations, mapState } from 'vuex';
import orderBy from 'lodash/orderBy';
import DiamondIcon from 'icons/Diamond.vue';
import { SET_GAME_PROP } from '@/state/types';
import BaseActionDot from './BaseActionDot.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  computed: {
    ...mapState('game', ['activeShip', 'score', 'purpleScore']),
    ...mapState('settings', ['actionOrder']),
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
        :label="'End'"
        @click="SET_GAME_PROP(['gameState', 'menu'])"
        small
      />
      <span>
        <DiamondIcon class="purple-diamond" />
        {{ purpleScore }}
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    & .purple-diamond { color: purple; }
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
