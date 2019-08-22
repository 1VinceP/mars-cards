<script>
import characters from '../assets/characters';
import MenuHeader from '@/components/MenuHeader.vue';
import Menu from '@/components/Menu.vue';
import GridHeader from '@/components/GridHeader.vue';
import Grid from '@/components/Grid.vue';

export default {
  data: () => ({
    selectedCharacter: Object.values(characters)[0],
    playing: false,
    bank: 0,
  }),

  methods: {
    setPlaying() { this.playing = !this.playing; },
    setCharacter(character) { this.selectedCharacter = character; },
  },

  components: {
    MenuHeader,
    Menu,
    GridHeader,
    Grid,
  },
};
</script>

<template>
  <div class="game">
    <section class="top-container">
      <MenuHeader
         v-if="!playing"
         :setPlaying="setPlaying"
         :character="selectedCharacter"
         :bank="bank"
      />
      <GridHeader v-else :setPlaying="setPlaying" />
    </section>

    <section class="main-container">
      <Menu v-if="!playing" :bank="bank" @setCharacter="setCharacter" />
      <Grid v-else />
    </section>
  </div>
</template>

<style scoped>
.game {
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
}

.top-container {
  height: 20%;
  width: 100%;
}

.main-container {
  height: 80%;
  width: 100%;
}
</style>
