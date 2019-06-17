<template>
  <div>
    <span>这是任务界面：</span>
    <br />
    <div v-bind:style="{ display: block }">
      <label>
        回复内容
        <el-input
          v-model="taskRecord.Task_reply"
          placeholder="请输入回复内容"
          disabled="disable"
        ></el-input>
      </label>
      <el-button @click="close()" type="text">确认</el-button>
    </div>
    <!-- 特殊 任务记录表 -->
    <div>
      <el-table :data="taskRecordTable" border style="width: 100%">
        <el-table-column
          fixed
          prop="Tr_id"
          label="任务记录ID"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="Task_id"
          label="任务ID"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="User_id"
          label="用户ID"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_reply"
          label="回复内容"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_comp_time"
          label="任务完成时间"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="Task_result"
          label="任务完成结果"
          width="120"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看回复</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getTaskRecord, postTaskRecordAdd } from "@/main/api/Main";
export default {
  data: () => ({
    block: "none",
    disable: "true",
    taskRecordTable: [],
    taskRecord: {
      Tr_id: null,
      Task_id: null,
      User_id: null,
      Task_reply: null,
      Task_comp_time: null,
      Task_result: null
    }
  }),
  created() {
    getTaskRecord();
    bus.$on(bus.taskRecord, data => {
      this.taskRecordTable = data;
    });
  },
  methods: {
    handleClick(row) {
      open();
      this.taskRecord = row;
      if (this.taskRecord.User_id == sessionStorage.getItem("user").user_id) {
        this.disable = "false";
      }
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
      postTaskRecordAdd(this.taskRecord);
    }
  }
};
</script>
