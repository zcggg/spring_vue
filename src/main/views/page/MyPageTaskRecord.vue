<template>
  <div>
    <span>任务分配:</span>
    <br />
    <!-- 任务表 -->
    <div>
      <el-table :data="task" border style="width: 100%">
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
      </el-table>
    </div>
  </div>
</template>
<script>
import { getMyTaskRecord } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  taskRecord: {
    Tr_id: null,
    Task_id: null,
    User_id: null,
    Task_reply: null,
    Task_comp_time: null,
    Task_result: null
  },
  methods: {
    created() {
      getMyTaskRecord();
      bus.$on(bus.taskRecord, data => {
        this.taskRecord = data;
      });
    }
  }
};
</script>
