<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><div @click="disableFullscreen">Home</div></router-link> |
      <router-link to="/game"><div @click="enableFullscreen">Game</div></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import screenfull from 'screenfull';

export default {
  methods: {
    enableFullscreen() {
      console.log('clicked!');
      screenfull.request();
    },
    disableFullscreen() {
      screenfull.exit();
    },
  },
};
</script>

<style>
#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #E77D11;
  color: #451804;
}
#nav {
  width: 50%;
  background: #E77D11;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #451804;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.heart-icon {
  color: pink;
}

.diamond-icon {
  color: green;
}
</style>
