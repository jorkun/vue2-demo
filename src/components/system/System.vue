<template>
  <div class="system">
    <h2 class="mt-0">当前位置：<small>系统管理</small></h2>
    <label>更改状态：</label>
    <button class="kk-btn" type="button" v-on:click="$store.commit('add')">+1</button>
    <button class="kk-btn" type="button" v-on:click="$store.commit('reduce')">-1</button>
    <p>结果预览（state.count）：{{$store.state.count}}</p>
  </div>
</template>
<script>
  import store from '@/store/store'
  export default {
      name: 'System',
      store
  }
</script>