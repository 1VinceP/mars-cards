<script>
import { mapState, mapMutations } from 'vuex';
import DiamondIcon from 'icons/Diamond.vue';
import { SET_PLAYING } from '@/state/types';

export default {
  props: {
    buttonLabel: String,
    character: Object,
  },

  computed: {
    ...mapState('game', { bank: 'playerBank' }),
  },

  methods: {
    ...mapMutations('game', [SET_PLAYING]),
  },

  components: { DiamondIcon },
};
</script>

<template>
  <div>
    <div>
      <DiamondIcon />
      <span>{{ bank }}</span>
    </div>
    <h1>Choose your character</h1>
    <h2>{{ character.name }}</h2>
    <button @click="SET_PLAYING()">Play</button>
  </div>
</template>
