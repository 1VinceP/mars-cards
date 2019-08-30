<script>
import { mapState } from 'vuex';
import BaseTile from './BaseTile.vue';

export default {
  name: 'Grid',
  computed: {
    ...mapState('game', ['grid']),
  },

  components: {
    BaseTile,
  },
};
</script>

<template>
    <transition-group name="list" tag="div" class="grid">
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 4px;
  padding: 0 4px;
}

.list-move {
  transition: all 500ms;
}
</style>
