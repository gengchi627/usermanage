<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>import { requestLogin } from '../api/api'
export default{
  data () {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '123456'
      },
      checked: true,
      rules2: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit2 (ev) {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.logining = true
          let loginParams = {username: this.ruleForm2.account, password: this.ruleForm2.checkPass}
          requestLogin(loginParams).then(data => {
            this.logining = false
            let {code, msg, user} = data
            if (code !== 200) {
              alert('code:' + code + ',msg:' + msg)
            } else {
              sessionStorage.setItem('user', JSON.stringify(user))
              this.$router.push('/user')
            }
          })
        } else {
          alert('error')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-container {
    margin: 180px auto;
    width: 350px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 35px 35px 15px 35px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .title {
    color: #505458;
    margin: 0 auto 40px;
    text-align: center;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }
</style>
