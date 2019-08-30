<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import orderBy from 'lodash/orderBy';
import ArrowRightIcon from 'icons/ArrowRight.vue';
import BulletIcon from 'icons/Bullet.vue';
import CardsOutlineIcon from 'icons/CardsOutline.vue';
import DiamondIcon from 'icons/Diamond.vue';
import InfinityIcon from 'icons/Infinity.vue';
import { SET_GAME_PROP } from '@/state/types';
import BaseActionDot from './BaseActionDot.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'GridHeader',
  computed: {
    ...mapState('game', ['activeShip', 'score', 'blueScore', 'endless']),
    ...mapState('options', ['actionOrder']),
    ...mapGetters('game', ['deckSize']),

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

  components: {
    BaseButton,
    BaseActionDot,
    ArrowRightIcon,
    BulletIcon,
    CardsOutlineIcon,
    DiamondIcon,
    InfinityIcon,
  },
};
</script>

<template>
  <div class="grid-header">
    <section class="top">
      <BaseButton
        :label="'Retreat'"
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

    <section class="bottom">
      <div class="deck">
        <CardsOutlineIcon />
        <span v-if="endless" class="count"><InfinityIcon /></span>
        <span v-else class="count">{{ deckSize }}</span>
      </div>

      <div class="sell">
        <BulletIcon />
        <ArrowRightIcon />
        <DiamondIcon />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.grid-header {
  height: 96%;
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
  & .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6px;
    & .count {
      margin-left: 3px;
    }
  }
}
</style>
