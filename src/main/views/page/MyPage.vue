<template>
  <div>
    <div>
      <span>这是我的页面</span>
      <template>
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
          <el-table-column
            prop="user_sum"
            label="简介"
            width="300"
          ></el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getMy } from "@/main/api/Main";
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
  created() {
    getMy();
    bus.$on(bus.user, data => {
      this.user = data;
    });
  }
};
</script>
