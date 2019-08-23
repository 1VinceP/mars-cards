<script>
import { mapGetters, mapMutations } from 'vuex';
import DiamondIcon from 'icons/Diamond.vue';
import HeartIcon from 'icons/Heart.vue';

import { UPGRADE, PURCHASE } from '@/state/types';
import BaseAction from './BaseAction.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  props: { setCharacter: Function },

  data: () => ({
    current: 0,
  }),

  computed: {
    character() {
      return this.characters[this.current];
    },

    ...mapGetters('game', { characters: 'characterList' }),
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

    ...mapMutations('game', [UPGRADE, PURCHASE]),
  },

  components: {
    DiamondIcon,
    HeartIcon,
    BaseAction,
    BaseButton,
  },
};
</script>

<template>
  <div class="menu">
    <h1 class="title">{{ character.name }}</h1>
    <section class="subtitle">
      <div>Level:
        <span v-if="character.unlocked">{{ character.level }}</span>
        <span v-else>0</span>
      </div>
      <div>Highscore: {{ character.highScore }}</div>
    </section>

    <section class="image">
      <button class="triangle left" @click="prevChar" />
      <img :src="character.image" />
      <button class="triangle right" @click="nextChar" />
    </section>

    <section v-if="!character.unlocked" class="utilBar purchase">
      <div class="health utilBarItem">
        <HeartIcon />
        <span>{{ character.health }}</span>
      </div>

      <BaseButton
        class="utilBarItem"
        @click="PURCHASE({ amount: character.cost, charNameId: character.nameId })"
        :label="'Purchase'"
        small
      />

      <div class="utilBarItem">
        <DiamondIcon />
        <span>{{ character.cost }}</span>
      </div>
    </section>
    <section v-else class="utilBar upgrade">
      <div class="health utilBarItem">
        <HeartIcon />
        <span>{{ character.health }}</span>
      </div>

      <BaseButton
        class="utilBarItem"
        @click="UPGRADE({ amount: character.upgradeCost, charNameId: character.nameId })"
        :label="'Upgrade'"
        small
      />

      <div class="utilBarItem">
        <DiamondIcon />
        <span>{{ character.upgradeCost }}</span>
      </div>
    </section>

    <section class="description">{{ character.description }}</section>

    <section class="actions">
      <BaseAction
        v-for="action in character.allActions"
        :key="action.id" :action="action"
        :nameId="character.nameId"
        :checked="character.selectedActions.findIndex(a => a.nameId === action.nameId) >= 0"
        :unlocked="character.unlocked"
      />
    </section>

    <section class="footer">
      <div v-show="character.unlocked" class="footer-content">
        <div class="action-limit">
        {{ character.selectedActions.length }} / {{ character.actionLimit }}
        </div>
        <BaseButton
          @click="$emit('setCharacter', character)"
          :label="'Select'"
          small
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;
  background: #E77D11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 3px;
  border: 2px solid #451804;
  border-radius: 18px;
  color: #fff;
}

.title {
  font-size: 24px;
}

.subtitle {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.image {
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
     max-height: 100%;
     max-width: 1005;
  }
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

.utilBar {
  width: 100%;
  display: flex;
  & .utilBarItem {
    flex: 1;
  }
}

.health {
  margin-bottom: 4px;
}

.description {
  max-height: 74px;
  height: 74px;
  width: 100%;
  padding: 0 10px;
  font-size: 18px;
  overflow-y: scroll;
}

.actions {
  height: 180px;
  max-height: 180px;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  padding: 0 10px;
}

.footer {
  height: 24px;
  width: 100%;
  & .footer-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
