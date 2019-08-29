<script>
import startCase from 'lodash/startCase';
import { mapGetters } from 'vuex';
import RecordSet from './RecordSet.vue';

export default {
  name: 'Records',
  computed: {
    ...mapGetters('records', ['recordsList']),
  },

  methods: {
    casing(string) { return startCase(string); },
  },

  components: { RecordSet },
};
</script>

<template>
  <div class="records">
    <RecordSet
      :header="'General'"
      :records="recordsList.general"
      :startCase="casing"
      :tier="1"
    />
    <RecordSet
      :header="'Game Modes'"
      :records="recordsList.gameModes"
      :startCase="casing"
      :tier="1"
    />
  </div>
</template>

<style lang="scss" scoped>
.records {
  width: 100%;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  padding: 0 18px 60px 18px;
  text-align: left;
}
</style>
