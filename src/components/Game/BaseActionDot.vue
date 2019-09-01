<script>
// import toastr from 'toastr';
import { mapState, mapMutations } from 'vuex';
import { SET_GAME_PROP } from '@/state/types';

export default {
  name: 'BaseActionDot',
  props: { action: Object, click: Function },

  computed: {
    ...mapState('game', ['activeAction', 'blueScore']),

    active() { return this.activeAction.nameId === this.action.nameId; },
  },

  methods: {
    ...mapMutations('game', [SET_GAME_PROP]),

    handleClick() {
      if (!this.active) {
        this.SET_GAME_PROP(['activeAction', this.action]);
        // if (this.blueScore >= this.action.cost) {
        //   this.SET_GAME_PROP(['activeAction', this.action]);
        // } else {
        //   toastr.error('You do not have enough Blue Crystals.');
        // }
      } else {
        this.SET_GAME_PROP(['activeAction', {}]);
      }
    },
  },
};
</script>

<template>
  <div
    class="action-dot"
    @click="handleClick()"
  >
    <div :class="['dot', { active }]">{{ action.cost }}</div>
    <h2 class="label">{{ action.name }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.action-dot {
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .dot {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 50%;
    color: var(--blue);
    font-weight: bold;
    &.active { background: #fff; }
  }
  & .label {
    font-size: 14px;
  }
}
</style>
