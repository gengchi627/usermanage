<template>
  <el-container>
    <el-header style="height: 60px;background: #20a0ff">
      <el-col :span="24">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapsed-width':'logo-width'">
          {{collapsed ? '' : sysName}}
        </el-col>
        <el-col :span="10">
          <div class="tools" @click.prevent="collapse">
            <i class="el-icon-tickets"></i>
          </div>
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar"/> {{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
    </el-header>
    <el-container>
      <el-aside :width="collapsed?'60':'230'">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 background-color="#eef1f6"
                 active-text-color="#20a0ff" :collapse="collapsed" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf" :key="index">
              <template slot="title"><i :class="item.iconCls"></i><span>{{item.name}}</span></template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"
                          :key="item.children[0].path"><i
              :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <el-col :span="24">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>export default{
  data () {
    return {
      sysName: 'VUEADMIN',
      collapsed: false,
      sysUserName: '',
      sysUserAvatar: ''
    }
  },
  methods: {
    collapse () {
      this.collapsed = !this.collapsed
    },
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    },
    logout () {
      this.$router.push('/login')
    }
  },
  mounted () {
    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.name || ''
      this.sysUserAvatar = user.avatar || ''
    }
  }
}
</script>

<style escoped>
  .el-icon-tickets {
    color: #ffffff;
  }

  .el-header {
    padding: 0;
  }

  .logo {
    color: #fff;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    padding: 0 20px;
    border-right: 1px solid rgba(238, 241, 146, 0.3);
  }

  .logo img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }

  .logo-collapsed-width {
    width: 60px;
  }

  .logo-width {
    width: 230px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    height: 100%;
  }

  .el-menu--collapse {
    width: 60px;
    height: 100%;
  }

  .tools {
    padding: 0 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }

  .userinfo {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    width: 200px;
    text-align: right;
    padding-right: 35px;
    float: right;
  }

  .userinfo-inner {
    cursor: pointer;
    color: #fff;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
</style>
