<template>
  <div>
    <el-col :span="12">
      <!-- 自定义颜色 -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">任务信息展示</span>
        </el-menu-item>
        <admTaskOpration v-if="isAdmin" />
      </el-menu>
    </el-col>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  components: { admTaskOpration: () => import("../admSide/TaskManage") },
  data: () => ({
    isAdmin: true,
    courses: [{ id: null, name: null }]
  }),
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    bus.$on(bus.courses, data => {
      this.courses = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.courses);
  }
};
</script>
