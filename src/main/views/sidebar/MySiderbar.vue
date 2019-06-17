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
        <el-menu-item index="1-1">
          <router-link :to="`/MyPage`" class="link_beauty"
            >用户个人信息</router-link
          >
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link :to="`/MyPageAlter`" class="link_beauty"
            >修改用户个人信息</router-link
          >
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
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
<style>
.link_beauty {
  text-decoration: none;
  color: rgb(230, 225, 219);
}
</style>
