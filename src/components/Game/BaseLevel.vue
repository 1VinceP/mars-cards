<script>
import LockOutlineIcon from 'icons/LockOutline.vue';

export default {
  name: 'BaseLevel',
  props: { level: Object, click: Function },

  methods: {
    onClick() {
      if (this.level.unlocked) {
        this.$emit('click');
      }
    },
  },

  components: { LockOutlineIcon },
};
</script>

<template>
  <div class="base-level" @click="onClick()">
    <div class="info-container">
      <h1 class="title">
        <p>{{ level.name }}</p>
        <LockOutlineIcon v-show="!level.unlocked" />
      </h1>
      <div class="info">
        {{ level.degree }} {{ level.grid }} {{ level.highScore }}
      </div>
    </div>
    <div class="card-count">{{ level.totalCards }}</div>
  </div>
</template>

<style lang="scss" scoped>
.base-level {
  height: 60px;
  width: 100%;
  background: #fff2;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 39px;
  color: #fff;
  & .info-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 6px 10px;
    & .title {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--orange);
      font-size: 20px;
      & p { margin-right: 10px; }
    }
    & .info {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & .card-count {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
}
</style>
