<script>
import { mapState, mapActions } from 'vuex';
import DiamondIcon from 'icons/Diamond.vue';
import BaseButton from '@/components/BaseButton.vue';
import { END_GAME } from '@/state/types';

export default {
  computed: {
    ...mapState('game', ['score', 'gameMode', 'records']),
  },

  methods: {
    ...mapActions('game', [END_GAME]),

    handleClick() {
      this.END_GAME();
    },
  },

  components: { DiamondIcon, BaseButton },
};
</script>

<template>
 <div class="debrief">
   <div class="item">
     <h1>Score</h1>
     <div>
       <DiamondIcon />
       {{ score }}
     </div>
   </div>

   <div class="item">
     <h1>Kills</h1>
     <div>{{ records.kills }}</div>
   </div>

   <div class="item">
     <h1>Boss Kills</h1>
     <div>{{ records.bossKills }}</div>
   </div>

   <div class="item">
     <h1>Structures Destroyed</h1>
     <div>{{ records.structuresDestroyed }}</div>
   </div>

   <div class="item">
     <h1>Damage Dealt</h1>
     <div>{{ records.damageDealt }}</div>
   </div>

   <div class="item">
     <h1>Actions Used</h1>
     <div>{{ records.actionsUsed }}</div>
   </div>

   <div class="item">
     <h1>Tiles Removed</h1>
     <div>{{ records.tilesRemoved }}</div>
   </div>

   <div class="quit-game">
     <BaseButton :label="'Quit'" style="width: 25%;" @click="handleClick()" />
   </div>
 </div>
</template>

<style lang="scss" scoped>
.debrief {
  height: 100%;
  width: 100%;
  background: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
}

.item {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
}

.quit-game {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}
</style>
