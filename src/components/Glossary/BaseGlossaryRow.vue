<script>
export default {
  props: { setList: Function, item: Object },
};
</script>

<template>
  <div
    class="glossary-item"
    @click="$emit('setDisplay', item.glossaryDisplay
      ? item.glossaryDisplay
      : `/glossary/${item.nameId}`
    )"
  >
    <h1 class="title">{{ item.name }}</h1>
    <p class="desc">{{ item.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.glossary-item {
  width: 100%;
  height: 120px;
  background: #fff1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 0 10px;
  color: #fff;
}

.title {
  font-size: 24px;
}

.desc {
  font-size: 14px;
}
</style>
