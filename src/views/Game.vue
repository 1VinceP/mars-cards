<script>
import { mapState } from 'vuex';
import MenuHeader from '@/components/Game/MenuHeader.vue';
import Menu from '@/components/Game/Menu.vue';
import LevelHeader from '@/components/Game/LevelHeader.vue';
import Level from '@/components/Game/Level.vue';
import GridHeader from '@/components/Game/GridHeader.vue';
import Grid from '@/components/Game/Grid.vue';

export default {
  computed: {
    ...mapState('game', ['gameState']),
  },

  components: {
    MenuHeader,
    Menu,
    LevelHeader,
    Level,
    GridHeader,
    Grid,
  },
};
</script>

<template>
  <div class="game">
    <section class="top-container">
      <MenuHeader v-if="gameState === 'menu'" />
      <LevelHeader v-else-if="gameState === 'level'" />
      <GridHeader v-else-if="gameState === 'grid'" />
    </section>

    <section class="main-container">
      <Menu v-if="gameState === 'menu'" />
      <Level v-else-if="gameState === 'level'" />
      <Grid v-else-if="gameState === 'grid'" />
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
