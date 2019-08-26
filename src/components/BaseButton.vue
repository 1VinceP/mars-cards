<script>
export default {
  props: {
    click: Function,
    label: String,
    small: Boolean,
    red: Boolean,
    disabled: Boolean,
  },

  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<template>
  <button
    @click="handleClick()"
    class="base-button"
    :class="{ small, red, disabled }"
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
  transition: all .25s ease-in-out;
  &.small {
    height: 30px;
    min-width: 100px;
    font-size: 14px;
  }
  &.red {
    border-color: red;
    color: red;
  }
  &.disabled {
    border-color: #808080;
    color: #808080;
    cursor: not-allowed;
  }
}
</style>
