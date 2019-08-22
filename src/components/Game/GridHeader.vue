<script>
import { mapMutations } from 'vuex';
import { SET_PLAYING } from '@/state/types';

export default {
  methods: {
    ...mapMutations('game', [SET_PLAYING]),
  },
};
</script>

<template>
  <div>
    <button @click="SET_PLAYING()">Stop</button>
  </div>
</template>
