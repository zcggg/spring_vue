<template>
  <div>
    <div>
      <span>这是监考页面</span>
      <template>
        <el-table :data="distributionTable" border style="width: 100%">
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
      </template>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getInvDistribute } from "@/main/api/Main";
export default {
  data: () => ({
    distribution: {
      Dis_id: null,
      Inv_id: null,
      User_id: null,
      Dis_appoint: null
    },
    distributionTable: []
  }),
  created() {
    getInvDistribute();
    bus.$on(bus.distribute, data => {
      this.distributionTable = data;
    });
  }
};
</script>
