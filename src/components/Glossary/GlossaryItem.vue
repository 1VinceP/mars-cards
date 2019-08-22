<script>
import ChevronLeftIcon from 'icons/ChevronLeft.vue';
import completeItems from '@/assets/completeList';

export default {
  props: { itemNameId: String },

  computed: {
    item() { return completeItems[this.itemNameId]; },
  },

  components: { ChevronLeftIcon },
};
</script>

<template>
  <div class="glossary-item">
    <router-link to="/glossary" class="nav">
      <ChevronLeftIcon />
      <span class="back">Back</span>
    </router-link>

    <div>{{ item.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.glossary-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  cursor: pointer;
  & .chevron-left-icon {
    font-size: 30px;
  }
  & .back {
    padding-bottom: 2px;
  }
}
</style>
