<template>
  <div class="study">
    <h2 class="mt-0">当前页面：学习平台</h2>
    <label>输入：</label>
    <input name="phone" type="text" class="kk-input" :value="value" v-on:keyup="validTel($event)" placeholder="输入手机号">
    <button type="button" class="kk-btn" v-bind:disabled="!isValid" v-on:click="handleClick($event)">拨号{{isValid ? ("："+ value) : '' }}</button>
    <div class="valid-error-message" v-show="!isValid && this.value.length>=11">{{ msg }}</div>
    <div class="show-status" v-show="isValid">{{msg}}</div>
  </div>
</template>
<script>
  export default {
      name: 'Study',
      methods: {
          validTel: function (e) {
              let reg = /^1[34578]\d{9}$/
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
          handleClick: function (e) {
              this.msg = '拨号中。。。'
              console.log('拨号中。。。')
          }
      },
      data () {
          return {
              value: '',
              isValid: false,
              msg: ''
          }
      }
  }
</script>