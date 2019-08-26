<script>
export default {
  props: {
    selected: Boolean,
    label: String,
    value: String,
    onclick: Function,
  },
};
</script>

<template>
  <div
    class="radio"
    :class="{ selected }"
    @click="$emit('onclick', value)"
  >
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.radio {
  width: 100px;
  padding: 6px;
  border: 5px solid #fff;
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
}

.selected {
  color: var(--orange);
  border-color: var(--orange);
}
</style>
