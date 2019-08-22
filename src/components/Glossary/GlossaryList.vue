<script>
import { mapMutations, mapState } from 'vuex';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import ChevronLeftIcon from 'icons/ChevronLeft.vue';

import router from '@/router';
import actionsList from '@/assets/actions';
import charactersList from '@/assets/characters';
import topList from '@/assets/topList';
import BaseGlossaryRow from '@/components/Glossary/BaseGlossaryRow.vue';
import { SET_GLOSSARY_LIST } from '@/state/types';

export default {
  data: () => ({
    lists: {
      topList,
      actionsList: orderBy(Object.values(actionsList), 'name'),
      astronautsList: filter(charactersList, c => c.faction === 'astronaut'),
    },
  }),

  computed: {
    ...mapState({
      currentDisplay: store => store.glossary.glossaryList,
    }),
  },

  methods: {
    ...mapMutations({ SET_GLOSSARY_LIST }),
    setCurrentDisplay(selection) {
      if (selection.toLowerCase().includes('list')) {
        this.SET_GLOSSARY_LIST({ list: selection });
      } else {
        router.push(selection);
      }
    },
  },

  components: { BaseGlossaryRow, ChevronLeftIcon },
};
</script>

<template>
  <div class="glossary-list">
    <nav v-show="currentDisplay !== 'topList'" class="nav" @click="setCurrentDisplay('topList')">
      <ChevronLeftIcon />
      <span class="back">Back</span>
    </nav>
    <BaseGlossaryRow
      v-for="item in lists[currentDisplay]"
      :key="item.id"
      :item="item"
      @setDisplay="setCurrentDisplay"
    />
  </div>
</template>

<style lang="scss" scoped>
.glossary-list {
  width: 100%;
  padding: 0 16px;
  background: #323231;
  display: flex;
  flex-direction: column;
}

.nav {
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 8px;
  margin-bottom: 30px;
  cursor: pointer;
  & .chevron-left-icon {
    font-size: 30px;
  }
  & .back {
    padding-bottom: 2px;
  }
}
</style>
