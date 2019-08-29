<script>
export default {
  name: 'BaseTile',
  props: { character: Object },
};
</script>

<template>
  <div class="card">
    <div>x: {{ character.coords.x }}</div>
    <div>y: {{ character.coords.y }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
  width: 100%;
  background: #E77D11;
  border-radius: 3px;
}
</style>
