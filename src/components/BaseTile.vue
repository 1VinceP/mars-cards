<script>
export default {
  props: { character: Object },
};
</script>

<template>
  <div class="card">
    <div>x: {{ character.coords.x }}</div>
    <div>y: {{ character.coords.y }}</div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
  width: 100%;
  background: #C1440E;
  border-radius: 3px;
}
</style>
