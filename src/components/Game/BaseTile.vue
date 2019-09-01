<script>
import { mapState, mapActions } from 'vuex';
import AmmunitionIcon from 'icons/Ammunition.vue';
import FireworkIcon from 'icons/Firework.vue';
import HeartIcon from 'icons/Heart.vue';
import IconRenderer from '@/components/IconRenderer.vue';
import { CATCH_TILE_CLICK } from '@/state/types';

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

  methods: {
    ...mapActions('game', [CATCH_TILE_CLICK]),
  },

  components: {
    AmmunitionIcon,
    FireworkIcon,
    HeartIcon,
    IconRenderer,
  },
};
</script>

<template>
  <div :class="[factionBorder, 'tile']" @click="CATCH_TILE_CLICK({ tile })">
    <section class="top">
      <div>
        <div v-if="content.ammo > 0" class="ammo-container">
          <AmmunitionIcon v-show="content.weapon === 'bullets'" :class="content.ammoType" />
          <FireworkIcon v-show="content.weapon === 'rockets'" :class="content.ammoType" />
          <div class="ammo">{{ content.ammo }}</div>
        </div>
      </div>
      <div class="health-container">
        <HeartIcon v-show="content.health" />
        <span>{{ content.health }}</span>
        <span v-show="tile.player">{{ `/${content.maxHealth}` }}</span>
      </div>
    </section>

    <section class="image">
      <img v-if="content.image" :src="content.image" />
      <IconRenderer v-else :nameId="content.nameId" :ammoType="content.ammoType" />
    </section>

    <section class="bottom">
      <span>{{ content.name }}</span>
      <div class="value">{{ content.value }}</div>
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
  justify-content: space-between;
  font-size: 15px;
  & .ammo-container {
    display: flex;
    align-items: center;
  }
}

.image {
  // height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    max-height: 100px;
    max-width: 100%;
  }
}

.ammunition-icon, .firework-icon {
  &.standard { color: #ccc; }
  &.incendiary { color: #e6a037; }
  &.cryo { color: #49beec; }
  &.caustic { color: #06b906; }
  &.armorPiercing { color: #1f0431; }
}

.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  & .value {
    height: 16px;
    width: 100%;
    padding: 0 3px;
    text-align: right;
  }
}
</style>
