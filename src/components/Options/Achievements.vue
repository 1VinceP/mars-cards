<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('game', ['achievementsList']),
  },
};
</script>

<template>
  <div>
    <div v-for="a in achievementsList" :key="a.nameId">
      {{ a.name }}
      {{ a.unlocked }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
