<template>
  <div>
    <span>修改任务:</span>
    <br />
    <div v-bind:style="{ display: block }">
      <label>
        任务名
        <el-input
          v-model="task.task_name"
          placeholder="请输入任务名"
          disabled="true"
        ></el-input>
      </label>
      <label>
        截止时间
        <el-input
          v-model="task.Task_deadline"
          placeholder="请输入截止时间"
        ></el-input>
      </label>
      <label>
        任务描述
        <el-input
          v-model="task.Task_sum"
          placeholder="请输入任务描述"
        ></el-input>
      </label>
      <el-button type="primary" plain @click="close">提交修改</el-button>
    </div>
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
import { postTaskAlter } from "@/main/api/Main";
import { getTask } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    block: "none",
    data: () => ({
      task: {
        Task_id: null,
        Task_name: null,
        Task_start_time: null,
        Task_deadline: null,
        Task_publisher: null,
        Task_state: null,
        Task_sum: null
      },
      taskTable: []
    }),
    created() {
      getTask();
      bus.$on(bus.task, data => {
        this.taskTable = data;
      });
    },
    methods: {
      handleClick(row) {
        this.task = row;
        this.open();
        /* this.task.Task_name = row.user_name;
        this.task.Task_deadline = row.user_password;
        this.task.Task_sum = row.user_pt;*/
      },
      open() {
        this.block = "block";
      },
      close() {
        this.block = "none";
      },
      add() {
        postTaskAlter({ task: this.task });
        this.close();
      }
    }
  })
};
</script>
