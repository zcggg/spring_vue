<template>
  <div>
    <div>
      <span>这是通知页面</span>
      <template>
        <el-table :data="noticeTable" style="width: 80%">
          <el-table-column
            prop="No_id"
            label="通知ID"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="User_id"
            label="用户ID"
            width="180"
          ></el-table-column>
          <el-table-column prop="No_name" label="通知名称"></el-table-column>
          <el-table-column prop="No_content" label="通知内容"></el-table-column>
          <el-table-column
            prop=" No_publish_time"
            label="通知时间"
          ></el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getNotice } from "@/main/api/Main";
export default {
  data: () => ({
    noticeTable: [],
    notice: {
      No_id: null,
      User_id: null,
      No_content: null,
      No_publish_time: null,
      No_name: null
    }
  }),
  created() {
    getNotice();
    bus.$on(bus.notice, data => {
      this.noticeTable = data;
    });
  }
};
</script>
