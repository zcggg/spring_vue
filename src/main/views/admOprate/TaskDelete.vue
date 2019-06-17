<template>
  <div>
    <span>删除任务:</span>
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
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { postTaskDelete, getTask } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    taskTable: [],
    block: "none",
    task: {
      Task_id: null,
      Task_name: null,
      Task_start_time: null,
      Task_deadline: null,
      Task_publisher: null,
      Task_sum: null,
      Task_state: null
    }
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
      this.deleted();
    },
    deleted() {
      postTaskDelete({ task: this.task });
    }
  }
};
</script>
<style scoped>
#bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(56, 56, 56);
  z-index: 2;
  top: 0;
  left: 0;
}
#content {
  padding: 5px;
  text-align: left;
  display: none;
  width: 500px;
  position: fixed;
  top: 20%;
  background: #fff;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
</style>
