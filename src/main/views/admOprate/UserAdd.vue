<template>
  <div>
    <span>添加用户:</span>
    <br />
    <label>
      用户名
      <el-input v-model="user.user_name" placeholder="请输入用户名"></el-input>
    </label>
    <label>
      职称
      <el-input v-model="user.user_pt" placeholder="请输入职称"></el-input>
    </label>
    <label>
      手机号
      <el-input v-model="user.user_tel" placeholder="请输入手机号"></el-input>
    </label>
    <label>
      简介
      <el-input v-model="user.user_sum" placeholder="请输入简介"></el-input>
    </label>
    <label>
      权限
      <el-input
        v-model="user.user_authority"
        placeholder="请输入权限"
      ></el-input>
    </label>
    <el-button @click="add()" type="text">添加用户</el-button>
  </div>
</template>
<script>
import { postUserAdd } from "@/main/api/Main";
export default {
  data: () => ({
    user: {
      user_name: null,
      user_pt: null,
      user_tel: null,
      user_sum: null,
      user_authority: null
    }
  }),
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    add() {
      postUserAdd({ user: this.user });
      this.back();
    }
  }
};
</script>
