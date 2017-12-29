<template>
  <div id="app">
    <div class="banner" v-show="!showIndex">
      <span>{{timeCount}}</span>
    </div>
    <router-view v-show="showIndex"/>
  </div>
</template>

<script>
export default {
    name: 'app',
    mounted () {
        this.handleShow()
        this.handleCount()
    },
    methods: {
        handleShow () {
            setTimeout(() => {
                this.showIndex = true
            }, 4000)
        },
        handleCount () {
            let interval = setInterval(() => {
                this.timeCount--
                if (this.timeCount === 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }
    },
    data () {
        return {
            showIndex: false,
            timeCount: 3
        }
    }
}
</script>

<style lang="scss">
@import './style/base.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
}
.banner {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #acecac;
  top: 0;
  text-align: center;
  span {
    font-size: 150px;
    display: inline-block;
    color: #fff;
    padding: {
      top: 15%;
    }
  }
}
</style>
