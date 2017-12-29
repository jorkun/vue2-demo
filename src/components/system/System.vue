<template>
  <div class="system">
    <h2 class="mt-0">当前位置：<small>系统管理</small></h2>
    <label>更改状态：</label>
    <button class="kk-btn" type="button" v-on:click="$store.commit('switch')">改变</button>
    <p>结果预览（state.status）：{{$store.state.status}}</p>
  </div>
</template>
<script>
  import store from '@/store/store'
  export default {
      name: 'System',
      store
  }
</script>