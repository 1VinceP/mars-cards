<script>
import { mapState } from 'vuex';
import MenuHeader from '@/components/Game/MenuHeader.vue';
import Menu from '@/components/Game/Menu.vue';
import LevelHeader from '@/components/Game/LevelHeader.vue';
import Level from '@/components/Game/Level.vue';
import GridHeader from '@/components/Game/GridHeader.vue';
import Grid from '@/components/Game/Grid.vue';
import DebriefHeader from '@/components/Game/DebriefHeader.vue';
import Debrief from '@/components/Game/Debrief.vue';

export default {
  name: 'Game',
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
    DebriefHeader,
    Debrief,
  },
};
</script>

<template>
  <div class="game">
    <section class="top-container">
      <MenuHeader v-if="gameState === 'menu'" />
      <LevelHeader v-else-if="gameState === 'level'" />
      <GridHeader v-else-if="gameState === 'grid'" />
      <DebriefHeader v-else-if="gameState = 'debrief'" />
    </section>

    <section class="main-container">
      <Menu v-if="gameState === 'menu'" />
      <Level v-else-if="gameState === 'level'" />
      <Grid v-else-if="gameState === 'grid'" />
      <Debrief v-else-if="gameState === 'debrief'" />
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
