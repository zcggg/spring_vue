<template>
  <div>
    <span>删除监考:</span>
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
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { postInvDelete, getInv } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    invTable: [],
    invigilation: {
      Inv_id: null,
      course: null,
      location: null,
      Inv_start_time: null,
      Inv_end_time: null,
      Inv_nr: null,
      Inv_state: null
    }
  }),
  methods: {
    created() {
      getInv();
      bus.$on(bus.inv, data => {
        this.invTable = data;
      });
    },
    deleted() {
      postInvDelete({ invigilation: this.invigilation });
      this.created();
    },
    handleClick(row) {
      this.invigilation = row;
      this.deleted();
    }
  }
};
</script>
