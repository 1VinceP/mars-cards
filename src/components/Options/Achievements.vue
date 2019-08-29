<script>
import { mapGetters } from 'vuex';
import CheckBoldIcon from 'icons/CheckBold.vue';

export default {
  name: 'Achievements',
  computed: {
    ...mapGetters('game', ['achievementsList']),
  },

  components: { CheckBoldIcon },
};
</script>

<template>
  <div class="achievements">
    <div v-for="a in achievementsList" :key="a.nameId" class="achievement-item">
      <section class="left">
        <h1 class="title">{{ a.name }}</h1>
        <p>{{ a.description }}</p>
        <i class="reward"><div>Reward</div>: {{ a.reward }}</i>
      </section>

      <section class="right">
        <CheckBoldIcon v-show="a.unlocked" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.achievements {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
}

.achievement-item {
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  & .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    & .title {
      font-size: 20px;
      margin-bottom: 3px;
    }
    & .reward {
      display: flex;
      & > div { color: var(--orange); }
    }
  }
  & .right {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .check-bold-icon {
      color: var(--green);
      font-size: 30px;
    }
  }
}
</style>
