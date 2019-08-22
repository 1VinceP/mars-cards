<script>
import GlossaryList from '@/components/Glossary/GlossaryList.vue';
import GlossaryItem from '@/components/Glossary/GlossaryItem.vue';

export default {
  components: { GlossaryList, GlossaryItem },
};
</script>

<template>
  <div class="glossary">
    <GlossaryList v-if="!$route.params.item" />
    <GlossaryItem v-else :itemNameId="$route.params.item" />
  </div>
</template>

<style lang="scss" scoped>
.glossary {
  width: 100%;
}
</style>
