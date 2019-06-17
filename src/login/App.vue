<template>
  <div id="app" class="div_center">
    <form ref="login">
      <el-input v-model="user.user_name" placeholder="请输入用户名"></el-input>
      <br />
      <br />
      <el-input
        placeholder="请输入密码"
        v-model="user.user_password"
        show-password
      ></el-input>
      <br />
      <br />
      <el-button type="primary" plain @click="login" class="button_width"
        >登录</el-button
      >
    </form>
    <alert />
  </div>
</template>

<script>
import { login } from "./api/Login";
export default {
  components: { alert: () => import("@/components/AlertDialog") },
  data: () => ({
    user: { user_name: null, user_password: null }
  }),
  methods: {
    login() {
      login(this.user);
      // 否则发送的user会被清空
      this.$nextTick(() => {
        this.user = { number: null, password: null };
      });
    }
  }
};
</script>

<style>
.div_center {
  text-align: center;
  height: 150px;
  width: 300px;
  margin: 250px auto;
}
.button_width {
  width: 300px;
}
</style>
