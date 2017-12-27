<template>
  <div id="app">
    <img class="logo-transition" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
@import './style/base.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  width: 700px;
  margin-top: 60px;
}
.logo-transition {
  width: 30px;
  margin-left: 96px;
  animation: circling 1s linear 0s infinite;
}
@keyframes circling {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}
</style>
