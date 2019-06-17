<template>
  <div>
    <span>任务分配:</span>
    <br />
    <div v-bind:style="{ display: block }">
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
        ></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>
      <el-button @click="add()">任务分配</el-button>
    </div>
    <!-- 任务表 -->
    <div>
      <el-table :data="taskTable" border style="width: 100%">
        <el-table-column
          fixed
          prop="Task_id"
          label="任务ID"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="Task_name"
          label="任务名"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_start_time"
          label="开始时间"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_deadline"
          label="结束时间"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_publisher"
          label="发布者"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_state"
          label="状态"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_sum"
          label="任务描述"
          width="200"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >分配任务</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { postTaskRecordAdd, getTask, getUser } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    block: "none",
    userTable: [],
    taskTable: [],
    user: {
      user_id: null,
      user_name: null,
      user_pt: null,
      user_tel: null,
      user_sum: null,
      user_authority: null,
      User_inv_times: null
    },
    task: {
      Task_id: null,
      Task_name: null,
      Task_start_time: null,
      Task_deadline: null,
      Task_publisher: null,
      Task_sum: null,
      Task_state: null
    },
    taskRecord: {
      Tr_id: null,
      Task_id: null,
      User_id: null,
      Task_reply: null,
      Task_comp_time: null,
      Task_result: null
    },
    currentRow: null
  }),
  methods: {
    created() {
      getTask();
      bus.$on(bus.task, data => {
        this.taskTable = data;
      });
    },
    handleClick(row) {
      open();
      getUser();
      bus.$on(bus.user, data => {
        this.userTable = data;
      });
      this.task = row;
      /*this.user.user_name = row.user_name;
      this.user.user_password = row.user_password;
      this.user.user_pt = row.user_pt;
      this.user.user_tel = row.user_tel;
      this.user.user_sum = row.user_sum;
      this.user.user_authority = row.user_authority;*/
    },
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      this.user = this.currentRow;
      this.taskRecord.user_id = this.user.user_id;
      this.taskRecord.Task_id = this.user.Task_id;
      postTaskRecordAdd({ taskRecord: this.taskRecord });
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
