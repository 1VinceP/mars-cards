<script>
import DiamondIcon from 'icons/Diamond.vue';
import router from '@/router';

export default {
  name: 'BaseGlossaryActionItem',
  props: { action: Object },
  methods: {
    handleClick() { router.push(`/glossary/${this.action.nameId}`); },
  },
  components: { DiamondIcon },
};
</script>

<template>
  <div class="action-item" @click="handleClick()">
    <section class="left">
      <div class="title">
        <h1 class="name">{{ action.name }}</h1>
      </div>

      <div class="desc">{{ action.description }}</div>
    </section>

    <section class="right">
      <div class="cost">
          <DiamondIcon class="blue-diamond" />
          <span>{{ action.cost }}</span>
        </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.action-item {
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 10px;
}

.left {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
  & .desc {
    align-self: flex-start;
    font-size: 14px;
  }
}

.right {
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  & .blue-diamond {
    margin-left: 10px;
    margin-right: -5px;
    color: var(--blue);
  }
  & span {
    margin-left: 4px;
  }
}
</style>
