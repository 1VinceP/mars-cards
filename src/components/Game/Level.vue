<script>
import { mapMutations } from 'vuex';
import levelList from '@/assets/levels';
import BaseLevel from './BaseLevel.vue';
import { START_GAME } from '@/state/types';

export default {
  name: 'Level',
  data: () => ({
    current: 0,
  }),

  computed: {
    levels() {
      return Object.values(levelList)
        .slice(this.current, this.current + 5);
    },
    listLength() { return Object.values(levelList).length; },
    maxNum() {
      if (this.current + 5 > this.listLength) {
        return this.listLength;
      }
      return this.current + 5;
    },
  },

  methods: {
    ...mapMutations('game', [START_GAME]),
    increment() { this.current = this.current + 6; },
    decrement() { this.current = this.current - 6; },
  },

  components: { BaseLevel },
};
</script>

<template>
  <div class="levels">
    <BaseLevel
      v-for="level in levels"
      :key="level.nameId"
      :level="level"
      @click="START_GAME({ level })"
    />
    <div class="nav">
      <div class="arrow-container">
        <div
          v-show="current > 0"
          class="triangle left"
          @click="decrement()"
        />
      </div>
      <div>{{ current + 1 }} - {{ maxNum }} / {{ listLength }}</div>
      <div class="arrow-container">
        <div
          v-show="current + 5 <= listLength"
          class="triangle right"
          @click="increment()"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.levels {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--orange);
  border-radius: 18px;
  padding: 20px 10px;
  position: relative;
  color: #fff;
  box-shadow: 0 8px 12px #0008;
}

.nav {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  bottom: 20px;
  & .arrow-container {
    width: 30px;
    & .triangle {
      width: 0;
      height: 0;
      background: transparent;
      border-top: 26px solid transparent;
      border-bottom: 26px solid transparent;
      &.left {
        border-left: 0px solid transparent;
        border-right: 26px solid var(--orange);
      }
      &.right {
        border-right: 0px solid transparent;
        border-left: 26px solid var(--orange);
      }
    }
  }
}
</style>
