<template>
  <div class="study">
    <h2 class="mt-0">当前位置：<small>学习平台</small></h2>
    <section>
        <h4 class="title">进阶二</h4>
        <p>
            {{msg}}
        </p>
    </section>
  </div>
</template>
<script>
  export default {
      name: 'Study2',
      data () {
          return {
              msg: ''
          }
      }
  }
</script>
<style type="scss" scoped>
</style>