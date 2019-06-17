<template>
  <div>
    <span>删除用户:</span>
    <el-table :data="userTable" border style="width: 100%">
      <el-table-column
        fixed
        prop="user_id"
        label="用户ID"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="user_name"
        label="用户名"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="user_pt"
        label="职称"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="user_tel"
        label="电话"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="user_authority"
        label="权限"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="User_inv_times"
        label="监考次数"
        width="120"
      ></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column
        prop="user_sum"
        label="简介"
        width="300"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <el-button @click="deleted(row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { postUserDelete, getUser } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    userTable: [],
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
      getUser();
      bus.$on(bus.user, data => {
        this.userTable = data;
      });
    },
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    deleted(row) {
      this.user = row;
      postUserDelete({ user: this.user });
      this.created();
    }
  }
};
</script>
