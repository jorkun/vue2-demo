<template>
    <header class="header">
        <img class="logo-transition" src="./../../../assets/logo.png">
        <div class="text-box">
            <!-- <span>做一颗健康的种子，破土、发芽、茁壮成长。</span> -->
            <span>{{$store.state.status|toStatus}}</span>
        </div>
        <Logout></Logout>
    </header>
</template>
<script>
    import store from '@/store/store'
    import Logout from '@/components/logout/Logout'
    export default {
        name: 'kk-header',
        store,
        components: {
            Logout
        }
    }
</script>
<style lang="scss">
.header {
    height: 60px;
    min-width: 1200px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: -2px 1px 7px 0px #ccc;
    background: #fff;
    z-index: 101;
    .logo-transition {
      width: 30px;
      margin-left: 20px;
      display: inline-block;
      vertical-align: top;
      margin-top: 20px;
      animation: circling 1s linear 0s infinite;
    }
    .text-box {
        z-index: 100;
        margin-left: calc((100% - 500px)/2);
        width: 500px;
        position: relative;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        font-size: 20px;
        overflow: hidden;
        span {
            position: absolute;
            margin-left: -500px;
            animation: textScrolling 10s linear 0s infinite;
        }
    }
}
@keyframes circling {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}
@keyframes textScrolling {
    from {
        margin-left: 0;
    }
    to {
        margin-left: 500px;
    }
}
</style>