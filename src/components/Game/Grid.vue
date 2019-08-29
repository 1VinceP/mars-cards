<script>
import BaseTile from './BaseTile.vue';

export default {
  name: 'Grid',
  data: () => ({
    items: [
      { coords: { x: 0, y: 0 } }, { coords: { x: 1, y: 0 } }, { coords: { x: 2, y: 0 } },
      { coords: { x: 0, y: 1 } }, { coords: { x: 1, y: 1 } }, { coords: { x: 2, y: 1 } },
      { coords: { x: 0, y: 2 } }, { coords: { x: 1, y: 2 } }, { coords: { x: 2, y: 2 } },
    ],
  }),

  components: {
    BaseTile,
  },
};
</script>

<template>
  <div class="grid">
    <BaseTile v-for="item in items" :key="item.id" :character="item" />
  </div>
</template>

<style scoped>
.grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 4px;
  padding: 0 4px;
}
</style>
