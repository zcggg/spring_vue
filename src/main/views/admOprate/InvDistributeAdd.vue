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
        ref="multipleTable"
        :data="userTable"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange(invigilation.inv_nr)"
      >
        <el-table-column type="selection" width="55"></el-table-column>
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
          show-overflow-tooltip
        ></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
          >切换第二、第三行的选中状态</el-button
        >
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
      <el-button @click="add()" type="text">添加监考分配记录</el-button>
    </div>
    <div>
      <el-table :data="invtable" border style="width: 100%">
        <el-table-column
          fixed
          prop="Inv_id"
          label="监考ID"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="course"
          label="课程名"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="location"
          label="地点"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Inv_start_time"
          label="开始时间"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Inv_end_time"
          label="结束时间"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Inv_nr"
          label="所需人数"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Inv_state"
          label="状态"
          width="120"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text"
              >监考分配</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { postInvDistributeAdd, getUser, getInv } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    userTable: [],
    invTable: [],
    block: "none",
    invigilation: {
      Inv_id: null,
      course: null,
      location: null,
      Inv_start_time: null,
      Inv_end_time: null,
      Inv_nr: null,
      Inv_state: null
    },
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
    multipleSelection: []
  }),
  methods: {
    handleClick(row) {
      this.invigilation = row;
      this.open();
      getUser();
      bus.$on(bus.user, data => {
        this.userTable = data;
      });
    },
    created() {
      getInv();
      bus.$on(bus.inv, data => {
        this.invTable = data;
      });
    },
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      this.distribution.Inv_id = this.user.Inv_id;
      this.multipleSelection.forEach(element => {
        this.distribution.user_id = element.user_id;
        postInvDistributeAdd({ distribute: this.distribution });
      });
      this.created();
      this.close();
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
