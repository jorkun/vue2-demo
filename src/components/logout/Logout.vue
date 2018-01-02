<template>
  <div class="logout" id="logout">
    <span>{{account.slice(0,1).toUpperCase()}}</span> | 
    <a href="javascript:;" v-on:click="logout">注销</a>
    <!-- <Loading v-if="isLogouting"></Loading> -->
  </div>
</template>
<script>
  // import Loading from '@/components/loading/Loading'
  export default {
      name: 'Logout',
      components: {
          // Loading
      },
      created () {
          this.account = this.getCookie('session')
      },
      data () {
          return {
              account: '',
              isLogouting: false
          }
      },
      methods: {
          logout () {
              this.isLogouting = true
              this.delCookie('session')
              this.isLogouting = false
              this.$router.push('/login')
          }
      }
  }
</script>
<style lang="scss">
  #logout {
    position: absolute;
    text-align: right;
    height: 60px;
    vertical-align: middle;
    right: 30px;
    top: 16px;
    font-size: 16px;
    span {
      font-size: 16px;
      border-radius: 50%;
      overflow: hidden;
      width: 21px;
      height: 21px;
      text-align: center;
      color: #fff;
      background-color: #1cd;
      display: inline-block;
      vertical-align: middle;
      padding: 4px;
    }
    a {
      color: #1ab973;
      text-decoration: none;
    }
  }
</style>