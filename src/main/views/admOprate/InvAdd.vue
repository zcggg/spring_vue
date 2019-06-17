<template>
  <div>
    <span>添加监考信息:</span>
    <br />
    <label>
      课程名
      <el-input
        v-model="invigilation.course"
        placeholder="请输入课程名"
      ></el-input>
    </label>
    <label>
      地点
      <el-input
        v-model="invigilation.location"
        placeholder="请输入地点"
      ></el-input>
    </label>
    <label>
      开始时间
      <el-input
        v-model="invigilation.Inv_start_time"
        placeholder="请输入开始时间"
      ></el-input>
    </label>
    <label>
      结束时间
      <el-input
        v-model="invigilation.Inv_end_time"
        placeholder="结束时间"
      ></el-input>
    </label>
    <label>
      所需人数
      <el-input
        v-model="invigilation.Inv_nr"
        placeholder="请输入所需人数"
      ></el-input>
    </label>
    <el-button @click="add()" type="text">添加监考</el-button>
  </div>
</template>
<script>
import { postInvAdd } from "@/main/api/Main";
export default {
  data: () => ({
    invigilation: {
      // Inv_id: null,
      course: null,
      location: null,
      Inv_start_time: null,
      Inv_end_time: null,
      Inv_nr: null
      //  Inv_state: null
    }
  }),
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    add() {
      postInvAdd({ invigilation: this.invigilation });
      this.back();
    }
  }
};
</script>
