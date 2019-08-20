<template>
  <div>
    <button @click="setPlaying">Stop</button>
  </div>
</template>

<script>
export default {
  props: {
    setPlaying: Function,
  },
};
</script>
