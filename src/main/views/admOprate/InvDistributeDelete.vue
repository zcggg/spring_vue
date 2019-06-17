<template>
  <div>
    <span>监考分配删除:</span>
    <br />
    <!-- 特殊，为监考分配表 -->
    <div>
      <el-table :data="distributeTable" border style="width: 100%">
        <el-table-column
          fixed
          prop="Dis_id"
          label="分配记录ID"
          width="150"
        ></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
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
          label="是否为指定通知用户"
          width="120"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >删除分配记录</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { postInvDistributeDelete, getInvDistribute } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    distributeTable: [],
    block: "none",
    distribution: {
      Dis_id: null,
      Inv_id: null,
      User_id: null,
      Dis_appoint: null
    }
  }),
  methods: {
    created() {
      getInvDistribute();
      bus.$on(bus.distribute, data => {
        this.distributeTable = data;
      });
    },
    handleClick(row) {
      this.distribution = row;
    },
    deleted() {
      postInvDistributeDelete({ distribute: this.distribution });
      this.created();
    }
  }
};
</script>
