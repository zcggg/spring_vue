<template>
  <div>
    <span>监考分配:</span>
    <br />
    <div v-bind:style="{ display: block }">
      分配ID
      <el-input
        v-model="distribution.Dis_id"
        placeholder="分配ID"
        disabled="true"
      ></el-input
      >用户ID
      <el-input
        v-model="distribution.User_id"
        placeholder="用户ID"
        disabled="true"
      ></el-input
      >监考ID
      <el-input
        v-model="distribution.Inv_id"
        placeholder="监考ID"
        disabled="true"
      ></el-input>
      <label>
        是否指定通知
        <el-input
          v-model="distribution.Dis_appoint"
          placeholder="请输入是或否"
        ></el-input>
      </label>
      <el-table
        ref="singleTable"
        :data="userTable"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"></el-table-column>
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
          show-overflow-tooltip
        ></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>
      <el-button @click="alter()" type="text">修改监考分配记录</el-button>
    </div>
    <!-- 特殊，为监考分配表 -->
    <div>
      <el-table :data="distributeTable" border style="width: 100%">
        <el-table-column
          fixed
          prop="Dis_id"
          label="分配记录ID"
          width="150"
        ></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column
          prop="Inv_id"
          label="监考ID"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="User_id"
          label="用户ID"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Dis_appoint"
          label="是否为指定通知用户"
          width="120"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改分配记录</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {
  postInvDistributeAlter,
  getInvDistribute,
  getUser
} from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    userTable: [],
    distributeTable: [],
    block: "none",
    user: {
      user_id: null,
      user_name: null,
      user_pt: null,
      user_tel: null,
      user_sum: null,
      user_authority: null,
      User_inv_times: null
    },
    distribution: {
      Dis_id: null,
      Inv_id: null,
      User_id: null,
      Dis_appoint: null
    },
    currentRow: null
  }),
  methods: {
    handleClick(row) {
      this.distribution = row;
      this.open();
      getUser();
      bus.$on(bus.user, data => {
        this.userTable = data;
      });
    },
    created() {
      getInvDistribute();
      bus.$on(bus.distribute, data => {
        this.distributeTable = data;
      });
    },
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    alter() {
      this.multipleSelection.forEach(element => {
        this.distribution.user_id = element.user_id;
        postInvDistributeAlter({ distribute: this.distribution });
      });
      this.close();
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>
