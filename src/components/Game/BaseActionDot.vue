<script>
export default {
  name: 'BaseActionDot',
  props: { action: Object },
};
</script>

<template>
  <div class="action-dot">
    <div class="dot">{{ action.cost }}</div>
    <h2 class="label">{{ action.name }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.action-dot {
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .dot {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 50%;
    color: var(--blue);
    font-weight: bold;
  }
  & .label {
    font-size: 14px;
  }
}
</style>
