<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import BaseButton from '@/components/BaseButton.vue';
import BaseRadio from '@/components/BaseRadio.vue';
import { SAVE_USER, CHANGE_SETTING, DELETE_USER } from '../../state/types';

export default {
  computed: {
    ...mapState(['user']),
    ...mapState('settings', ['version']),
  },

  methods: {
    ...mapMutations('settings', [CHANGE_SETTING]),
    ...mapActions([DELETE_USER, SAVE_USER]),

    deleteUser() {
      if (!localStorage.getItem('users')) { return; }
      this.DELETE_USER();
    },
  },

  components: { BaseButton, BaseRadio },
};
</script>

<template>
  <div class="settings">
    <div v-show="user.username" class="line">
      <div>User:</div> <div>{{ user.username }}</div>
    </div>

    <div class="line">
      <div>In-game action sort</div>
      <div>
        <BaseRadio :label="'Cost'" />
        <BaseRadio :label="'Name'" />
      </div>
    </div>

    <div class="line">
      <div>Version:</div> <div>{{ version }}</div>
    </div>

    <div v-show="user.username" class="line">
      <BaseButton
        :label="'Delete Save'"
        @click="deleteUser()"
        small
        red
      />
      <BaseButton :label="'Save'" @click="SAVE_USER()" small />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
}

.line {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
