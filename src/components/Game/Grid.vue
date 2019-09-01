<script>
import { mapState } from 'vuex';
import BaseTile from './BaseTile.vue';

export default {
  name: 'Grid',
  computed: {
    ...mapState('game', ['grid', 'level']),

    gridClass() {
      return this.level.grid
        .split('x')
        .map(
          num => num === '2' ? 'two'
            : num === '3' ? 'three'
              : num === '4' && 'four',
        )
        .join('-');
    },
  },

  components: {
    BaseTile,
  },
};
</script>

<template>
    <transition-group name="list" tag="div" :class="['grid', gridClass]">
      <BaseTile
        v-for="tile in grid"
        :key="`${tile.coords.x},${tile.coords.y}`"
        :tile="tile"
      />
    </transition-group>
</template>

<style lang="scss" scoped>
.grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 4px;
  padding: 0 4px;
  &.two-two {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  &.three-three {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  &.four-four {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}

.list-move {
  transition: all 500ms;
}
</style>
