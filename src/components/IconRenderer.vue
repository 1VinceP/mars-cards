<script>
import AlienIcon from 'icons/Alien.vue';
import AmmunitionIcon from 'icons/Ammunition.vue';
import CrystalFieldIcon from 'icons/FocusField.vue';
import EmptyIcon from 'icons/CropSquare.vue';
import DiamondStoneIcon from 'icons/DiamondStone.vue';
import FireworkIcon from 'icons/Firework.vue';
import MountainIcon from 'icons/ImageFilterHdr.vue';
import PickaxeIcon from 'icons/Pickaxe.vue';
import RacingHelmetIcon from 'icons/RacingHelmet.vue';
import SnowflakeIcon from 'icons/SnowflakeVariant.vue';
import TeachIcon from 'icons/Teach.vue';
import WeatherSunnyIcon from 'icons/WeatherSunny.vue';
import WeatherTornadoIcon from 'icons/WeatherTornado.vue';

export default {
  props: { nameId: String, ammoType: String, type: String },

  components: {
    AlienIcon,
    AmmunitionIcon,
    CrystalFieldIcon,
    EmptyIcon,
    DiamondStoneIcon,
    FireworkIcon,
    MountainIcon,
    PickaxeIcon,
    RacingHelmetIcon,
    SnowflakeIcon,
    TeachIcon,
    WeatherSunnyIcon,
    WeatherTornadoIcon,
  },
};
</script>

<template>
  <div v-if="type === 'ammoType'" class="weapon-group">
    <AmmunitionIcon :class="['icon', nameId]" />
    <FireworkIcon :class="['icon', nameId]" />
  </div>

  <AlienIcon
    v-else-if="nameId === 'alienGrunt' || nameId === 'alienCommander' || nameId === 'alienPrisoner'"
    :class="['icon', nameId]"
  />
  <AmmunitionIcon
    v-else-if="nameId === 'bullets'"
    :class="['icon', ammoType]"
  />
  <CrystalFieldIcon v-else-if="nameId === 'crystalField'" class="icon" />
  <EmptyIcon v-else-if="nameId === 'empty'" class="icon" />
  <DiamondStoneIcon
    v-else-if="nameId === 'greenCrystal' || nameId === 'blueCrystal'"
    :class="['icon', nameId]"
  />
  <FireworkIcon
    v-else-if="nameId === 'rockets'"
    :class="['icon', ammoType]"
  />
  <MountainIcon v-else-if="nameId === 'mountain' || nameId === 'cliff'" :class="['icon', nameId]" />
  <PickaxeIcon
    v-else-if="nameId === 'miningCamp' || nameId === 'extractionLair'"
    :class="['icon', nameId]"
  />
  <RacingHelmetIcon
    v-else-if="nameId === 'astroGrunt' || nameId === 'astroCommander' || nameId === 'astroPrisoner'"
    :class="['icon', nameId]"
  />
  <SnowflakeIcon v-else-if="nameId === 'flashFreeze'" class="icon" />
  <TeachIcon
    v-else-if="nameId === 'trainingCamp' || nameId === 'trainingHive'"
    :class="['icon', nameId]"
  />
  <WeatherSunnyIcon v-else-if="nameId === 'solarStorm'" class="icon" />
  <WeatherTornadoIcon v-else-if="nameId === 'dustStorm'" class="icon" />
</template>

<style lang="scss" scoped>
.weapon-group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  font-size: 60px;
  &.alien-icon {
    &.alienGrunt { color: var(--alien); }
    &.alienCommander {
      background: var(--red);
      border-radius: 50%;
      color: var(--alien);
    }
    &.alienPrisoner { color: var(--red); }
  }
  &.crop-square-icon { font-size: 40px; color: var(--bg); } // empty
  &.diamond-stone-icon {
    &.greenCrystal { color: var(--green); }
    &.blueCrystal { color: var(---blue); }
  }
  &.focus-field-icon { font-size: 75px; color: var(--green); } // crystal field
  &.image-filter-hdr-icon { // mountain & cliff
    &.cliff { color: #d07c46 }
    &.mountain { font-size: 90px; color: #d07c46; }
  }
  &.racing-helmet-icon {
    &.astroGrunt { color: var(--astro); }
    &.astroCommander {
      background: var(--astro);
      border-radius: 10px;;
      color: var(--orange);
    }
    &.astroPrisoner { color: var(--blue) }
  }
  &.pickaxe-icon {
    &.miningCamp { color: var(--blue); }
    &.extractionLair { color: var(--alien); }
  }
  &.snowflake-variant-icon { color: #49beec; }
  &.teach-icon {
    &.trainingCamp { color: var(--blue); }
    &.trainingHive { color: var(--alien); }
  }
  &.weather-sunny-icon { font-size: 80px; color: #ffe600; }
  &.weather-tornado-icon { color: #d07c46; }
  &.ammunition-icon, &.firework-icon {
    &.standard { color: #ccc; }
    &.incendiary { color: #e6a037; }
    &.cryo { color: #49beec; }
    &.caustic { color: #06b906; }
    &.armorPiercing { color: #000000; }
  }
}
</style>
