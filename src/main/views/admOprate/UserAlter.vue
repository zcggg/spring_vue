<template>
  <div>
    <span>修改用户:</span>
    <br />
    <div v-bind:style="{ display: block }">
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
      <el-button type="primary" plain @click="add()">提交修改</el-button>
    </div>
    <!-- user表 -->
    <div>
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
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { postUserAlter, getUser } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  tableData: [],
  data: () => ({
    userTable: [],
    block: "none",
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
    handleClick(row) {
      this.open();
      this.user = row;
      /* this.user.user_name = row.user_name;
      this.user.user_password = row.user_password;
      this.user.user_pt = row.user_pt;
      this.user.user_tel = row.user_tel;
      this.user.user_sum = row.user_sum;
      this.user.user_authority = row.user_authority;*/
    },
    created() {
      getUser();
      bus.$on(bus.user, data => {
        this.userTable = data;
      });
    },
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    add() {
      postUserAlter({ user: this.user });
      this.close();
      this.back();
    }
  }
};
</script>
