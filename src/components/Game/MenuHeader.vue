<script>
import { mapState, mapMutations } from 'vuex';
import DiamondIcon from 'icons/Diamond.vue';
import { SET_GAME_PROP } from '@/state/types';
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

  components: { BaseRadio, DiamondIcon },
};
</script>

<template>
  <div class="menu-header">
    <section class="top">
      <div>
        {{ ship.name }}
      </div>
      <div class="bank">
        <DiamondIcon />
        <span>{{ bank }}</span>
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
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    padding: 0 6px;
    font-size: 18px;
  }
  & .factions {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
