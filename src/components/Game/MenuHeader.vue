<script>
import { mapState, mapMutations } from 'vuex';
import DiamondIcon from 'icons/Diamond.vue';
import { SET_GAME_PROP } from '@/state/types';
import BaseButton from '@/components/BaseButton.vue';
import BaseRadio from '@/components/BaseRadio.vue';

export default {
  props: { buttonLabel: String },

  computed: {
    ...mapState('game', {
      bank: 'playerBank',
      ship: 'activeShip',
      faction: 'faction',
    }),
  },

  methods: {
    ...mapMutations('game', [SET_GAME_PROP]),
  },

  components: { BaseButton, BaseRadio, DiamondIcon },
};
</script>

<template>
  <div class="menu-header">
    <section class="top">
      <div class="bank">
        <DiamondIcon />
        <span>{{ bank }}</span>
      </div>
      <div>
        Active: {{ ship.name }}
      </div>
    </section>

    <section class="factions">
      <BaseRadio
        :label="'Astronauts'"
        :value="'astronauts'"
        :selected="faction === 'astronauts'"
        @click="SET_GAME_PROP(['faction', 'astronauts'])"
      />
      <BaseRadio
        :label="'Aliens'"
        :value="'aliens'"
        :selected="faction === 'aliens'"
        @click="SET_GAME_PROP(['faction', 'aliens'])"
      />
    </section>

    <BaseButton @click="SET_GAME_PROP(['gameState', 'level'])" :label="'Level Select'" />
  </div>
</template>

<style lang="scss" scoped>
.menu-header {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & .factions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 12%;
  }
}
</style>
