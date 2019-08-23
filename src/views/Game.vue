<script>
import { mapState } from 'vuex';
import characters from '../assets/characters';
import MenuHeader from '@/components/Game/MenuHeader.vue';
import Menu from '@/components/Game/Menu.vue';
import GridHeader from '@/components/Game/GridHeader.vue';
import Grid from '@/components/Game/Grid.vue';

export default {
  data: () => ({
    activeCharacter: Object.values(characters)[0],
  }),

  computed: {
    ...mapState('game', ['playing']),
  },

  methods: {
    setCharacter(character) { this.activeCharacter = character; },
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
         :character="activeCharacter"
      />
      <GridHeader v-else />
    </section>

    <section class="main-container">
      <Menu v-if="!playing" @setCharacter="setCharacter" />
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
  padding: 10px;
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
