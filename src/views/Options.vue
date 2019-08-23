<script>
import VueTinyTabs from 'vue-tiny-tabs';

export default {
  components: { VueTinyTabs },
};
</script>

<template>
  <div class="options">
    <VueTinyTabs />
  </div>
</template>

<style lang="scss" scoped>
.options {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
