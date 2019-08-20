<template>
  <div>
    <div>
      <span>{{ bank }}</span>
      <DiamondIcon />
    </div>
    <h1>Choose your character</h1>
    <h2>{{ character }}</h2>
    <button @click="setPlaying">Play</button>
  </div>
</template>

<script>
import DiamondIcon from 'icons/Diamond.vue';

export default {
  props: {
    setPlaying: Function,
    bank: Number,
    buttonLabel: String,
    character: String,
  },

  data: () => ({}),

  components: { DiamondIcon },
};
</script>
