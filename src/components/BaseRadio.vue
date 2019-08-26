<script>
export default {
  props: {
    selected: Boolean,
    disabled: Boolean,
    label: String,
    value: String,
    click: Function,
  },

  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('click', this.value);
      }
    },
  },
};
</script>

<template>
  <div
    class="radio"
    :class="{ selected, disabled }"
    @click="onClick()"
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
  transition: all .15s ease-in-out;
  &.selected {
    border-color: var(--orange);
    color: var(--orange);
  }
  &.disabled {
    border-color: #808080;
    color: #808080;
    cursor: not-allowed;
  }
}
</style>
