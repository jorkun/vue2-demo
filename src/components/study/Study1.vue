<template>
  <div class="study">
    <h2 class="mt-0">当前位置：<small>学习平台</small></h2>
    <section>
        <h4 class="title">进阶一：表格组件</h4>
        <List :datas="listDatas" :columns="listColumns"></List>
    </section>
  </div>
</template>
<script>
  import List from '@/components/list/List'
  export default {
      name: 'Study1',
      components: {
          List
      },
      data () {
          return {
              listColumns: ['名称', '简介', '详情'],
              listDatas: [{
                  name: 'zhang',
                  summary: 'xxxxxxxxxxx1',
                  detail: '/study/2'
              }, {
                  name: 'zhang2',
                  summary: 'xxxxxxxxxxx2',
                  detail: '/study/2'
              }, {
                  name: 'zhang3',
                  summary: 'xxxxxxxxxxx3',
                  detail: '/study/2'
              }, {
                  name: 'zhang4',
                  summary: 'xxxxxxxxxxx4',
                  detail: '/study/2'
              }, {
                  name: 'zhang5',
                  summary: 'xxxxxxxxxxx5',
                  detail: '/study/2'
              }, {
                  name: 'zhang6',
                  summary: 'xxxxxxxxxxx6',
                  detail: '/study/2'
              }, {
                  name: 'zhang7',
                  summary: 'xxxxxxxxxxx7',
                  detail: '/study/2'
              }]
          }
      }
  }
</script>
<style type="scss" scoped>
</style>