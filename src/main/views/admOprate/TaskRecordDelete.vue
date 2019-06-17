<template>
  <div>
    <span>监考分配删除:</span>
    <br />
    <!-- 特殊，为任务记录表 -->
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
            <el-button @click="handleClick(scope.row)" type="text"
              >删除任务</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getTaskRecord, postTaskRecordDelete } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
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
  methods: {
    created() {
      getTaskRecord();
      bus.$on(bus.taskRecord, data => {
        this.taskRecordTable = data;
      });
    },
    deleted() {
      postTaskRecordDelete({ taskRecord: this.taskRecord });
    },
    handleClick(row) {
      this.taskRecord = row;
      this.deleted();
    }
  }
};
</script>
