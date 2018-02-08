<template>
  <section>
    <el-col :span="24" style="padding-bottom: 0px;" class="toolbar">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input placeholder="姓名" atoucomplete="off" v-model="filters.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUser">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <template>
      <el-table :data="users" class="userTable" highlight-current-row v-loading="loading">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180" sortable></el-table-column>
        <el-table-column prop="sex" label="性别" width="120" sortable :formatter="formatSex"></el-table-column>
        <el-table-column prop="age" label="年龄" width="120" sortable></el-table-column>
        <el-table-column prop="birth" label="生日" width="180" sortable></el-table-column>
        <el-table-column prop="addr" label="地址" sortable></el-table-column>
      </el-table>
    </template>
  </section>
</template>

<script>import { getUserList } from '../../api/api'
export default {
  data () {
    return {
      loading: false,
      filters: {
        name: ''
      },
      users: []
    }
  },
  methods: {
    formatSex (row, column) {
      return row.sex === 1 ? '男' : '女'
    },
    getUser () {
      this.loading = true
      let params = {name: this.filters.name}
      getUserList(params).then(res => {
        this.users = res.data.users
        this.loading = false
      })
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style scoped>
</style>
