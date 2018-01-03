<template>
  <div class="list">
    <table>
      <thead>
        <th v-for="head in columns">{{head}}</th>
      </thead>
      <tbody>
        <tr v-for="item in datas">
          <td v-for="(d,i) in item">
            <router-link v-if="i==='detail'" v-bind:to="d">点击</router-link>
            <span v-if="i!=='detail'">{{d}}</span>
          </td>
        </tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  </div>
</template>
<script>
  export default {
      name: 'List',
      props: {
          datas: Array,
          columns: Array
      }
  }
</script>
<style lang="scss" scoped>
  .list {
    position: relative;
    table { 
      border-collapse: collapse;
      th {
        padding: 6px 10px;
        border: 1px solid #ccc;
      }
      td {
        padding: 6px 10px;
        border: 1px solid #ccc;
      }
    }
  }
</style>