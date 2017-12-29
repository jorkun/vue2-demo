<template>
  <div class="work">
    <h2 class="mt-0">当前位置：<small>工作状态</small></h2>
    <p>当前状态：{{$store.state.status | toStatus}}</p>
    <p>
      <em>状态值可以在
         <router-link v-bind:to="toLink.name">{{ toLink.title }}</router-link>
      内进行修改。</em>
    </p>
  </div>
</template>
<script>
    import store from '@/store/store'
    export default {
        name: 'Work',
        data () {
            return {
                toLink: {
                    name: 'system',
                    title: '系统管理'
                }
            }
        },
        store
    }
</script>