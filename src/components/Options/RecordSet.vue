<script>
export default {
  name: 'RecordSet',
  props: {
    header: String,
    records: Object,
    startCase: Function,
    tier: Number,
  },

  data: () => ({
  }),

  computed: {
    nextTier() { return this.tier + 1; },
    headerClass() { return `header-${this.tier}`; },
    borderClass() { return `border-${this.tier}`; },
  },

  methods: {
    isRecordSet(record) {
      return typeof record === 'object';
    },
  },

  components: {
    RecordSet: () => import('./RecordSet.vue'),
  },
};
</script>

<template>
  <div class="records-container">
    <h1 :class="[headerClass, 'title']">{{ header }}</h1>
    <div
      v-for="(record, title) in records"
      :key="record.name"
      :class="[borderClass, 'record-set']"
    >
      <div v-if="!isRecordSet(record)" style="width: 100%;">
        <div v-show="title !== 'name'" class="record">
          <span>{{ startCase(title) }}:</span>
          <span>{{ record }}</span>
        </div>
      </div>
      <RecordSet v-else
        :header="startCase(title)"
        :records="record"
        :startCase="startCase"
        :tier="nextTier"
        class="indent-set"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.records-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  & .title {
    margin-top: 12px;
    margin-bottom: 2px;
    font-size: 24px;
    &.header-1 { font-size: 24px; }
    &.header-2 { font-size: 22px; }
    &.header-3 { font-size: 20px; }
  }
  & .record-set {
    width: 100%;
    display: flex;
    padding-left: 12px;
    font-size: 18px;
    &.border-1 { border-left: 1px solid var(--orange); }
    &.border-2 { border-left: 1px solid var(--green); }
    &.border-3 { border-left: 1px solid var(--blue); }
    & .record {
      width: 100%;
      display: flex;
      justify-content: space-between;
      line-height: 180%;
    }
  }
}

.indent-set {
  padding-left: 3px;
}
</style>
