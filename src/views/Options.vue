<script>
import Settings from '@/components/Options/Settings.vue';
import Records from '@/components/Options/Records.vue';
import Achievements from '@/components/Options/Achievements.vue';

export default {
  data: () => ({
    tab: 'settings',
  }),

  methods: {
    changeTab(tab) { this.tab = tab; },
  },

  components: {
    Settings,
    Records,
    Achievements,
  },
};
</script>

<template>
  <div class="options">
    <nav class="tabs">
      <div
        class="tab start"
        :class="{ 'tab-active': tab === 'settings' }"
        @click="changeTab('settings')"
      >
        Settings
      </div>
      <div
        class="tab"
        :class="{ 'tab-active': tab === 'records' }"
        @click="changeTab('records')"
      >
        Records
      </div>
      <div
        class="tab end"
        :class="{ 'tab-active': tab === 'achievements' }"
        @click="changeTab('achievements')"
      >
        Achievements
      </div>
    </nav>

    <Settings v-if="tab === 'settings'" />
    <Records v-if="tab === 'records'" />
    <Achievements v-if="tab === 'achievements'" />
  </div>
</template>

<style lang="scss" scoped>
.options {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
}

.tabs {
  height: 40px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  & .tab {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #767675;
  }
  & .tab-active { background: var(--orange); }
  & .start { border-radius: 25px 0 0 25px; }
  & .end { border-radius: 0 25px 25px 0; }
}
</style>
