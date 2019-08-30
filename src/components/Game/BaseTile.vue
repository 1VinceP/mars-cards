<script>
import { mapState } from 'vuex';

export default {
  name: 'BaseTile',
  props: { tile: Object },

  computed: {
    ...mapState('game', ['faction']),

    content() { return this.tile.content; },

    factionBorder() {
      if (this.tile.player) {
        return 'player';
      }
      return this.faction === 'astronauts'
        ? 'astronauts' : 'aliens';
    },
  },
};
</script>

<template>
  <div :class="[factionBorder, 'tile']">
    <section class="top">
      <p>{{ content.health }}/{{ content.maxHealth }}</p>
    </section>

    <section class="image">
      <img :src="content.image" />
    </section>

    <section class="bottom">
      {{ content.name }}
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  height: 100%;
  width: 100%;
  background: #555;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  padding: 3px;
  &.player { border: 2px solid var(--blue) };
  &.astronauts { border: 1px solid var(--orange); }
  &.aliens { border: 1px solid var(--green); }
}

.top {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.image {
  width: 100%;
  & img {
    max-width: 100%;
  }
}
</style>
