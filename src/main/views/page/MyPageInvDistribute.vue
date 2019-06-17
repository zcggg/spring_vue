<template>
  <div>
    <span>任务分配:</span>
    <br />
    <!-- 任务表 -->
    <div>
      <el-table :data="distribution" border style="width: 100%">
        <el-table-column
          fixed
          prop="Dis_id"
          label="分配ID"
          width="150"
        ></el-table-column>
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
          label="是否为指定通知"
          width="120"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getMyInvDistribute } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    distribution: {
      Dis_id: null,
      Inv_id: null,
      User_id: null,
      Dis_appoint: null
    }
  }),
  methods: {
    created() {
      getMyInvDistribute();
      bus.$on(bus.disatribute, data => {
        this.disatribution = data;
      });
    }
  }
};
</script>
