<template>
  <div class="index">
    <h2 class="mt-0">{{msg}}</h2>
    <p>
      <em>该程序共包含：工作平台、学习平台、系统管理三个模块。</em>
    </p>
  </div>
</template>
<script>
  export default {
      name: 'Index',
      data () {
          return {
              msg: '当前页面：首页'
          }
      }
  }
</script>