<template>
  <div class="study">
    <h2 class="mt-0">当前页面：学习平台</h2>
    <section>
        <h4 class="title">1、数据绑定</h4>
        <label>输入：</label>
        <input name="phone" type="text" class="kk-input" v-model="value" v-on:input="validTel($event)" placeholder="输入手机号">
        <button type="button" class="kk-btn" v-bind:disabled="!isValid" v-on:click="handleClick($event)">拨号{{isValid ? ("："+ value) : '' }}</button>
        <div class="valid-error-message" v-show="!isValid && this.value.length>=11">{{ msg }}</div>
        <div class="show-status" v-show="running">{{msg}}</div>
        <h5 v-show="!!$store.state.histories.length">历史记录 <button v-on:click="$store.commit('removeHistory')">清除</button></h5>
        <p v-for="tel in $store.state.histories"><em v-on:click="handleClick($event, tel)">{{tel}}</em></p>
    </section>
    <section>
        <h4 class="title">2、过滤器</h4>
        <label class>输入：</label>
        <input class="kk-input" type="text" v-model="chat" placeholder="请输入小写字母" />
        <p v-show="chat">转换成大写：{{chat|toUpperCase}}</p>
        <p></p>
        <label class>输入：</label>
        <input class="kk-input" type="text" v-model="name" placeholder="请输入姓名" />
        <p v-show="name">问候：{{name|toHello}}</p>
    </section>
  </div>
</template>
<script>
  import store from '@/store/store'
  import Vue from 'vue'
  Vue.filter('toUpperCase', (v) => v.toUpperCase())
  Vue.filter('toHello', (v) => {
      return 'Hello, ' + v
  })
  export default {
      name: 'Study',
      methods: {
          validTel: function (e) {
              let reg = /^1[34578]\d{9}$/
              this.running = false
              this.value = e.target.value
              if (this.value === '') {
                  this.msg = '请输入号码'
                  this.isValid = false
              } else if (!reg.test(this.value)) {
                  this.msg = '手机号格式不正确'
                  this.isValid = false
              } else {
                  this.msg = ''
                  this.isValid = true
              }
          },
          handleClick: function (e, v) {
              this.msg = '拨号中。。。'
              if (!v) {
                  store.state.histories.push(this.value)
                  store.state.histories = Array.from(new Set(store.state.histories))
              }
              this.value = ''
              this.isValid = false
              this.running = true
              console.log('拨号中。。。')
          }
      },
      data () {
          return {
              value: '',
              isValid: false,
              running: false,
              name: '',
              chat: '',
              msg: ''
          }
      },
      store
  }
</script>
<style type="scss" scoped>
    p {
        word-break: break-all;
    }
</style>