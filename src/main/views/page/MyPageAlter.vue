<template>
  <div>
    <span>修改用户个人信息:</span>
    <br />
    <label>
      用户名
      <el-input
        v-model="user.user_name"
        placeholder="请输入用户名"
        disabled="true"
      ></el-input>
    </label>
    <label>
      密码
      <el-input
        v-model="user.user_password"
        placeholder="请输入密码"
      ></el-input>
    </label>
    <label>
      手机号
      <el-input v-model="user.user_tel" placeholder="请输入手机号"></el-input>
    </label>
    <label>
      简介
      <el-input v-model="user.user_sum" placeholder="请输入简介"></el-input>
    </label>
    <el-button type="primary" plain @click="alter()">提交修改</el-button>
  </div>
</template>
<script>
import { postMyAlter } from "@/main/api/Main";
import { getMy } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    user: {
      user_id: null,
      user_name: null,
      user_pt: null,
      user_tel: null,
      user_sum: null,
      user_authority: null,
      User_inv_times: null
    }
  }),
  methods: {
    created() {
      getMy();
      bus.$on(bus.user, data => {
        this.user = data;
      });
    },
    alter() {
      postMyAlter(this.user);
      this.created();
    }
  }
};
</script>
