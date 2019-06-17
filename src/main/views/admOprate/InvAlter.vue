<template>
  <div>
    <span>修改监考:</span>
    <br />
    <div v-bind:style="{ display: block }">
      <label>
        课程名
        <el-input
          v-model="course"
          placeholder="请输入课程名"
          disabled="true"
        ></el-input>
      </label>
      <label>
        地点
        <el-input v-model="location" placeholder="请输入地点"></el-input>
      </label>
      <label>
        开始时间
        <el-input
          v-model="Inv_start_time"
          placeholder="请输入开始时间"
        ></el-input>
      </label>
      <label>
        结束时间
        <el-input v-model="Inv_end_time" placeholder="结束时间"></el-input>
      </label>
      <label>
        所需人数
        <el-input v-model="Inv_nr" placeholder="请输入所需人数"></el-input>
      </label>
      <el-button type="primary" plain @click="alter()">提交修改</el-button>
    </div>
    <div>
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
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { postInvAlter, getInv } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data: () => ({
    block: "none",
    invtable: [],
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
        this.invtable = data;
      });
    },
    handleClick(row) {
      open();
      this.invtable = row;
      /*this.invigilation.course = row.user_name;
      this.invigilation.location = row.user_password;
      this.invigilation.Inv_start_time = row.user_pt;
      this.invigilation.Inv_end_time = row.user_tel;
      this.invigilation.Inv_nr = row.user_sum;*/
    },
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    alter() {
      postInvAlter({ invigilation: this.invigilation });
      this.close();
    }
  }
};
</script>
