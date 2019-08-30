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
  <div class="grid">
    <div v-for="(row, i) in grid" :key="i" class="col">
      <BaseTile v-for="tile in row" :key="tile.coords.x" :tile="tile" />
    </div>
    <!-- <BaseTile v-for="tile in grid" :key="tile.id" :character="tile" /> -->
  </div>
</template>

<style lang="scss" scoped>
.grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
  padding: 0 4px;
  & .col {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 4px;
  }
}
</style>
