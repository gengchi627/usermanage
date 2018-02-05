<template>
  <div>
    <div v-show="showregister">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="text" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <p v-on:click="ToRegister">没有账号？马上注册</p>
    </div>
    <div v-show="showlogin">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="text" placeholder="请输入密码" v-model="newPassword">
      <button>注册</button>
      <p v-on:click="ToLogin">已有账号？马上登录</p>
    </div>
  </div>
</template>

<script>export default{
  data () {
    return {
      showregister: true,
      showlogin: false,
      showTishi: false,
      user_name: '',
      password: '',
      newUsername: '',
      newPassword: '',
      tishi: ''
    }
  },
  methods: {
    ToRegister () {
      this.showlogin = true
      this.showregister = false
    },
    ToLogin () {
      this.showregister = true
      this.showlogin = false
    },
    login () {
    }
  }
}
</script>

<style>
  input {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #e3e5e5;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  button {
    display: block;
    width: 250px;
    margin: 0px auto;
    height: 40px;
    line-height: 40px;
    background-color: #42b983;
    border: 1px solid #e3e5e5;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }

  p {
    cursor: pointer;
  }
</style>
