<template>
  <div>
    <div>
      <span>这是用户页面</span>
      <template>
        <el-table :data="userTable" style="width: 80%">
          <el-table-column
            prop="user_id"
            label="用户ID"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="user_name"
            label="用户名"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="user_pt"
            label="职称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="user_tel"
            label="电话"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="user_authority"
            label="权限"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="User_inv_times"
            label="监考次数"
            width="180"
          ></el-table-column
          >"
          <el-table-column prop="user_sum" label="简介"></el-table-column>
        </el-table>
      </template>
    </div>
    <userAdd />
    <userAlter />
    <userDelete />
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getUser } from "@/main/api/Main";
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
  created() {
    getUser();
    bus.$on(bus.user, data => {
      this.userTable = data;
    });
  }
};
</script>
