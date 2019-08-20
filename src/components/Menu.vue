<template>
  <div class="menu">
    <h1>{{ character.name }}</h1>
    <p>Highscore: {{ character.highScore }}</p>

    <div class="image">
      <button class="triangle left" @click="prevChar" />
      <img :src="character.image" />
      <button class="triangle right" @click="nextChar" />
    </div>

    <div class="health">
      <HeartIcon />
      <span>{{ character.health }}</span>
    </div>

    <div v-if="!character.unlocked" class="purchase">
      <span>{{ character.cost }}</span>
      <DiamondIcon />
      <button>Purchase</button>
    </div>
    <div v-else>
      <span>{{ character.upgradeCost }}</span>
      <DiamondIcon />
      <button>Upgrade</button>
    </div>

    <div class="description">{{ character.description }}</div>
  </div>
</template>

<script>
import DiamondIcon from 'icons/Diamond.vue';
import HeartIcon from 'icons/Heart.vue';
import characters from '../assets/characters';

export default {
  data: () => ({
    current: 0,
    characters: Object.values(characters),
  }),

  computed: {
    character() {
      return {
        ...this.characters[this.current],
        upgradeCost: this.characters[this.current].level * 200,
      };
    },
  },

  methods: {
    prevChar() {
      this.current = this.current === 0
        ? this.characters.length - 1
        : this.current - 1;
    },
    nextChar() {
      this.current = this.current === this.characters.length - 1
        ? 0
        : this.current + 1;
    },
  },

  components: { DiamondIcon, HeartIcon },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.image {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .triangle {
    width: 0;
    height: 0;
    background: transparent;
    border-top: 26px solid transparent;
    border-bottom: 26px solid transparent;
    &.left {
      border-left: 0px solid transparent;
      border-right: 26px solid #451804;
    }
    &.right {
      border-right: 0px solid transparent;
      border-left: 26px solid #451804;
    }
  }
}
</style>
