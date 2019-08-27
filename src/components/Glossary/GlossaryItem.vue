<script>
import orderBy from 'lodash/orderBy';
import ChevronLeftIcon from 'icons/ChevronLeft.vue';
import DiamondIcon from 'icons/Diamond.vue';
import HeartIcon from 'icons/Heart.vue';
import BaseGlossaryActionItem from './BaseGlossaryActionItem.vue';
import completeItems from '@/assets/completeList';
import topList from '@/assets/topList';

export default {
  props: { itemNameId: String },

  computed: {
    item() {
      if (this.$route.params.item === 'guide') {
        return topList[4];
      }
      return completeItems[this.itemNameId];
    },
    bonusActions() {
      return {
        exists: Array.isArray(this.item.bonusActions)
          ? this.item.bonusActions.length > 0 : false,
        list: this.item.bonusActions
          ? orderBy(this.item.bonusActions, 'name') : [],
      };
    },
    regularActions() {
      return {
        exists: Array.isArray(this.item.actions)
          ? this.item.actions.length > 0 : false,
        list: this.item.actions
          ? orderBy(this.item.actions, 'name') : [],
      };
    },
  },

  components: {
    BaseGlossaryActionItem,
    ChevronLeftIcon,
    DiamondIcon,
    HeartIcon,
  },
};
</script>

<template>
  <div class="glossary-item">
    <router-link to="/glossary" class="nav">
      <ChevronLeftIcon />
      <span class="back">Back</span>
    </router-link>

    <h1 class="title">{{ item.name }}</h1>
    <p class="item-class">{{ item.class }}</p>

    <section v-if="item.image" class="image">
      <img :src="item.image" />
    </section>
    <section v-else class="buffer" />

    <section v-if="item.health" class="stats">
      <div class="health">
        <HeartIcon />
        <span>{{ item.health }}</span></div>
      <div class="unlocked">{{ item.unlocked ? 'Unlocked' : 'Locked' }}</div>
      <div class="cost">
        <DiamondIcon />
        <span>{{ item.cost }}</span>
      </div>
    </section>
    <section v-else-if="item.cost" class="action-cost">
      <DiamondIcon />
      <span>{{ item.cost }}</span>
    </section>

    <section
      class="content"
      :class="item.health ? 'desc-left' : 'desc-center'"
    >
      <div v-if="$route.params.item === 'guide'" class="guide">
        <div v-for="(para, i) in item.content" :key="i">
          <h1 class="guide-title">{{ para.title }}</h1>
          <p class="guide-paragraph">{{ para.paragraph }}</p>
          <div v-show="para.extra">
            <div v-for="(detail, i) in para.extra" :key="i" class="guide-extra">
              <h2>{{ detail.name }}:</h2>
              <p>{{ detail.detail }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="desc">{{ item.description }}</div>
    </section>

    <section v-show="bonusActions.exists" class="actions">
      <div class="actions-title">
        Bonus actions
        <p>Bonus actions are always available</p>
      </div>
      <BaseGlossaryActionItem
        v-for="action in bonusActions.list"
        :key="action.id"
        :action="action"
      />
    </section>

    <section v-show="regularActions.exists" class="actions">
      <div class="actions-title">
        Actions
        <p>{{ item.name }} can select {{ item.actionLimit }} of these actions</p>
      </div>
      <BaseGlossaryActionItem
        v-for="action in regularActions.list"
        :key="action.id"
        :action="action"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.glossary-item {
  min-height: 0;
  width: 100%;
  background: #323231;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px 24px;
}

.nav {
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 30px;
  text-decoration: none;
  cursor: pointer;
  & .chevron-left-icon {
    font-size: 30px;
  }
  & .back {
    padding-bottom: 4px;
  }
}

.title {
  font-size: 36px;
  margin-bottom: 4px;
}

.item-class {
  font-size: 12px;
  margin-bottom: 12px;
}

.image {
  width: 100%;
  margin-bottom: 10px;
  & img {
    max-width: 100%;
  }
}
.buffer { height: 70px; }

.stats {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & div { flex: 1; }
  & span { margin-left: 2px; }
}
.action-cost {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  padding-right: 30px;
  & .diamond-icon {
    color: var(--blue);
  }
  & span {
    margin-left: 3px;
    padding-top: 3px;
  }
}

.content {
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  & .desc {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-radius: 5px;
    padding: 3px 6px;
  }
}
.desc-center { text-align: center; }
.desc-left { text-align: left; }

.guide {
  width: 100%;
  & .guide-title {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 28px;
  }
  & .guide-paragraph {
    width: 100%;
    text-align: left;
    font-size: 18px;
    line-height: 112%;
  }
  & .guide-extra {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    padding: 0 12px;
    text-align: left;
    & h2 { margin-bottom: 4px; }
    & p { font-size: 16px; }
  }
}

.actions {
  width: 100%;
  margin-bottom: 20px;
  & .actions-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 20px;
    & p {
      font-size: 12px;
    }
  }
}
</style>
