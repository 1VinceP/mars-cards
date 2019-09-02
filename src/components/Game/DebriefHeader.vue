<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('game', ['missionReport']),

    report() {
      return this.missionReport === 'success'
        ? 'Mission Success!'
        : 'You were captured...';
    },
  },
};
</script>

<template>
  <div class="debrief-header">{{ report }}</div>
</template>

<style lang="scss" scoped>
.debrief-header {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
</style>
