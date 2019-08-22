<script>
export default {
  props: {
    setPlaying: Function,
  },
};
</script>

<template>
  <div>
    <button @click="setPlaying">Stop</button>
  </div>
</template>
