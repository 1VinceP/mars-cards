<script>
import { mapMutations } from 'vuex';
import CheckCircleIcon from 'icons/CheckCircle.vue';
import CircleOutlineIcon from 'icons/CircleOutline.vue';
import DiamondIcon from 'icons/Diamond.vue';

import { SET_ACTION } from '@/state/types';

export default {
  name: 'BaseAction',
  props: {
    action: Object,
    nameId: String,
    checked: Boolean,
    unlocked: Boolean,
  },

  methods: {
    ...mapMutations('game', [SET_ACTION]),
  },

  components: { CheckCircleIcon, CircleOutlineIcon, DiamondIcon },
};
</script>

<template>
  <div class="action" @click="SET_ACTION({ action, charNameId: nameId })">
    <section class="left">
      <div class="title">
        <h1 class="name">{{ action.name }}</h1>
      </div>

      <div class="desc">{{ action.description }}</div>
    </section>

    <section class="right">
      <div class="cost">
        <DiamondIcon class="blue-diamond" />
        {{ action.cost }}
      </div>
      <div v-show="unlocked">
        <CheckCircleIcon
          v-if="checked || action.bonus"
          :class="{ 'bonus-check-icon': action.bonus }"
        />
        <CircleOutlineIcon v-else />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.action {
  min-height: 44px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 0;
}

.left {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: var(--orange);
    font-size: 16px;
  }
  & .desc {
    padding: 0 10px;
    align-self: flex-start;
    font-size: 14px;
    text-align: left;
  }
}

.right {
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  & .cost {
    color: #fff;
    & .blue-diamond {
      margin-right: -2px;
      color: var(--blue);
    }
  }
  & .bonus-check-icon {
    color: var(--blue);
  }
  & .check-circle-icon,
  & .circle-outline-icon {
    font-size: 24px;
  }
}
</style>
