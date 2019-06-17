<template>
  <div>
    <template>
      <el-carousel
        :interval="4000"
        type="card"
        height="200px"
        class="margin_right"
      >
        <el-carousel-item v-for="item in superurl" :key="item">
          <!-- <h3 class="medium">{{ item }}</h3> -->
          <img :src="item.img" />
        </el-carousel-item>
      </el-carousel>
    </template>
    <template>
      <el-table :data="InvTable" style="width: 45%">
        <el-table-column
          prop="course"
          label="课程名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="location"
          label="地点"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="Inv_start_time"
          label="开始时间"
        ></el-table-column>
        <el-table-column prop="Inv_end_time" label="结束时间"></el-table-column>
        <el-table-column prop="Inv_nr" label="所需人数"></el-table-column>
      </el-table>
    </template>
    <template>
      <el-table :data="TaskTable" style="width: 45%">
        <el-table-column
          prop="Task_name"
          label="任务名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="Task_start_time"
          label="姓名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="Task_deadline"
          label="截止日期"
        ></el-table-column>
        <el-table-column prop="Task_publisher" label="发布者"></el-table-column>
        <el-table-column prop="Task_sum" label="任务描述"></el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import { getMain } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    InvTable: [],
    TaskTable: [],
    superurl: [
      {
        url: "",
        img:
          "https://img.mukewang.com/szimg/5ac2dfe100014a9005400300-360-202.jpg"
      },
      {
        url: "",
        img:
          "https://img.mukewang.com/szimg/5c62a4dc0812e84106000338-360-202.jpg"
      },
      {
        url: "",
        img:
          "https://img.mukewang.com/szimg/5c7c82630820acf806000338-360-202.jpg"
      }
    ]
    /* invigilation: {
      course: null,
      location: null,
      Inv_start_time: null,
      Inv_end_time: null,
      Inv_nr: null
    },
    task: {
      Task_name: null,
      Task_start_time: null,
      Task_deadline: null,
      Task_publisher: null,
      Task_sum: null
    },*/
  }),
  methords: {
    created() {
      getMain();
      bus.$on(bus.inv, data => {
        this.InvTable = data;
      });
      bus.$on(bus.task, data => {
        this.TaskTable = data;
      });
    }
  }
};
</script>
<style>
.margin_right {
  margin-right: 400px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
