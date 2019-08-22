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

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><div @click="disableFullscreen">Home</div></router-link> |
      <router-link to="/game"><div @click="enableFullscreen">Game</div></router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  background: #323231;
  color: #fff;
}
#nav {
  width: 50%;
  background: #323231;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
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
