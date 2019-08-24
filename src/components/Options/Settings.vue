<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: { BaseButton },
};
</script>

<template>
  <div class="settings">
    <div class="line">
      <div>Version:</div> <div>a0.0.1a</div>
    </div>

    <div class="line">
      <BaseButton :label="'Delete Save'" small style="border-color: red; color: red;" />
      <BaseButton :label="'Save'" small />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
}

.line {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
