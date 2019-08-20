<template>
  <div class="game">
    <section class="top-container">
      <MenuHeader v-if="!playing" :setPlaying="setPlaying" :character="character" :bank="bank" />
      <GridHeader v-else :setPlaying="setPlaying" />
    </section>

    <section class="main-container">
      <Menu v-if="!playing" :bank="bank" />
      <Grid v-else />
    </section>
  </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue';
import Menu from '@/components/Menu.vue';
import GridHeader from '@/components/GridHeader.vue';
import Grid from '@/components/Grid.vue';

export default {
  data: () => ({
    playing: false,
    character: 'Astro Fighter',
    bank: 0,
  }),

  methods: {
    setPlaying() { this.playing = !this.playing; },
  },

  components: {
    MenuHeader,
    Menu,
    GridHeader,
    Grid,
  },
};
</script>

<style scoped>
.game {
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.top-container {
  height: 25%;
  width: 100%;
}

.main-container {
  height: 75%;
  width: 100%;
}
</style>
