<script>
import DiamondIcon from 'icons/Diamond.vue';
import { mapState } from 'vuex';

export default {
  props: {
    setPlaying: Function,
    buttonLabel: String,
    character: Object,
  },

  computed: mapState({
    bank: 'playerBank',
  }),

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
    <button @click="setPlaying">Play</button>
  </div>
</template>
