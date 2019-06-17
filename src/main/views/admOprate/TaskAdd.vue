<template>
  <div>
    <span>添加任务:</span>
    <br />
    <label>
      任务名
      <el-input v-model="task.Task_name" placeholder="请输入任务名"></el-input>
    </label>
    <label>
      发布时间
      <el-input
        v-model="task.Task_start_time"
        placeholder="请输入发布时间"
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
      发布者
      <el-input
        v-model="task.Task_publisher"
        placeholder="请输入发布者"
      ></el-input>
    </label>
    <label>
      任务描述
      <el-input v-model="task.Task_sum" placeholder="请输入任务描述"></el-input>
    </label>
  </div>
</template>
<script>
import { postTaskAdd } from "@/main/api/Main";
export default {
  data: () => ({
    task: {
      Task_name: null,
      Task_start_time: null,
      Task_deadline: null,
      Task_publisher: null,
      Task_sum: null
    }
  }),
  methods: {
    add() {
      postTaskAdd({ task: this.task });
    }
  }
};
</script>
