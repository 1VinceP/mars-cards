<script>
export default {
  props: { onclick: Function, label: String, small: Boolean },
};
</script>

<template>
  <button
    @click="$emit('click')"
    class="base-button"
    :class="{ small }"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  height: 40px;
  background-color: transparent;
  border: 5px solid #eee;
  border-radius: 25px;
  color: #eee;
  font-size: 20px;
  font-weight: bold;
}

.small {
  height: 30px;
  min-width: 100px;
  font-size: 14px;
}
</style>
