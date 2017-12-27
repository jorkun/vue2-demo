<template>
  <div class="work">
    <h2 class="mt-0">{{msg}}</h2>
    <p>当前状态：{{$store.state.count}}</p>
  </div>
</template>
<script>
  import store from '@/store/store'
  export default {
      name: 'Work',
      data () {
          return {
              msg: '当前页面：工作平台'
          }
      },
      store
  }
</script>