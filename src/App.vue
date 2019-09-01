<script>
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import screenfull from 'screenfull';
import { mapMutations } from 'vuex';
import { SET_GLOSSARY_LIST } from './state/types';

export default {
  computed: {
    path() { return this.$route.path; },
  },

  mounted() {
    toastr.options = {
      positionClass: 'toast-top-full-width',
      showMethod: 'slideDown',
      hideMethod: 'slideUp',
      closeMethod: 'slideUp',
      timeOut: 2500,
      showDuration: 100,
      hideDuration: 100,
      hideDuplicates: true,
    };
  },

  methods: {
    ...mapMutations('glossary', [SET_GLOSSARY_LIST]),
    enableFullscreen() {
      screenfull.request();
    },
    disableFullscreen() {
      screenfull.exit();
    },
    resetGlossary() {
      this.enableFullscreen();
      this.SET_GLOSSARY_LIST({ list: 'topList' });
    },
  },
};
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" :class="{ 'at-link': path === '/' }">
        <div @click="disableFullscreen">Home</div>
      </router-link> |
      <router-link to="/game" :class="{ 'at-link': path.includes('game') }">
        <div @click="enableFullscreen">Game</div>
      </router-link> |
      <router-link to="/glossary" :class="{ 'at-link': path.includes('glossary') }">
        <div @click="resetGlossary">Glossary</div>
      </router-link> |
      <router-link to="/options" :class="{ 'at-link': path.includes('options') }">
        <div @click="enableFullscreen">Options</div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Exo+2&display=swap');
:root {
  --orange: #e78a11;
  --blue: #058eff;
  --green: #b8ff29;
  --red: #f14c4c;
  --bg: #323231;
  --astro: #ccc;
  --alien: #013a01;
}

#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Exo 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #323231;
  color: #fff;
}
#nav {
  width: 100%;
  background: #323231;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.at-link {
  color: var(--orange);
}

#toast-container.toast-top-full-width > div {
  width: 100%;
  opacity: 1;
  font-family: 'Exo 2', sans-serif;
}

.heart-icon {
  color: pink;
}

.diamond-icon {
  color: var(--green);
}
</style>
