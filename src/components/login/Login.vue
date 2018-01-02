<template>
    <div class="login" id="login">
      <div class="log-info">
        <h2 class="mt-0">VUE 学习</h2>
        <div v-if="!isValid" class="error-msg">账户信息不能为空！</div>
        <div>
          <input type="text" placeholder="Email" :class="'kk-input log-input' + (account=='' ? ' log-input-empty' : '')" v-model="account">
          <input type="password" placeholder="Password" :class="'kk-input log-input' + (password=='' ? ' log-input-empty' : '')" v-model="password">
        </div>
        <a href="javascript:;" class="kk-btn log-btn" v-on:click="login" :disabled="disabledBtn">登陆</a>
      </div>
      <Loading v-if="isLoading" marginTop="3%"></Loading>
    </div>
</template>
<script>
  import Loading from '@/components/loading/Loading'
  export default {
      name: 'Login',
      data () {
          return {
              isLoading: false,
              account: '',
              password: '',
              isValid: true,
              disabledBtn: false
          }
      },
      components: {
          Loading
      },
      methods: {
      // 登陆逻辑
          login () {
              if (this.disabledBtn) return false
              if (this.account !== '' && this.password !== '') {
                  this.isValid = true
                  this.disabledBtn = true
                  this.toLogin()
              } else {
                  this.isValid = false
                  this.disabledBtn = false
              }
          },
          toLogin () {
              // let passwordSha = encodeURI(this.password)
              // let loginParam = {
              //     account: this.account,
              //     passwordSha
              // }

              this.isLoading = true
              // this.$http.post('', {param: loginParam}).then((response)=> {
              //   this.isLoading = false
              //   if (response.data.code == 1) {
              //     let expireDays = 1000 * 60 * 60 * 24 * 15
              //     this.setCookie('session', response.data.session, expireDays)
              //     // 登陆成功
              //     this.$router.push('/dashboard')
              //   }
              // }, (error) => {
              //   this.isLoading = false
              //   console.log(error)
              // })
              setTimeout(() => {
                  let expireDays = 1000 * 60 * 60 * 24 * 15
                  let acc = this.account
                  this.setCookie('session', acc, expireDays)
                  this.isLoading = false
                  this.disabledBtn = false
                  // 登陆成功
                  this.$router.push('/dashboard')
              }, 3000)
          }
      }
  }
</script>
<style lang="scss" scoped>
  #login {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(#92b9bd, #52a260);
    .log-info {
      width: 400px;
      margin: 100px auto 0;
      text-align: center;
      position: relative;
      padding: 40px 20px 20px;
      h2 {
        font-size: 30px;
        color: #fee;
      }
      .error-msg {
        color: #f00;
        margin: auto;
        position: absolute;
        top: 83px;
        left: 26%;
      }
    }
    .log-input {
      margin-bottom: 20px;
    }
    .log-btn {
      text-decoration: none;
      color: #1ab980;
      height: auto;
      padding: 10px 20px;
      display: inline-block;
    }
  }
</style>