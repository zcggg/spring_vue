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
          <router-link :to="`/Userpage`" class="link_beauty"
            >用户信息展示</router-link
          >
        </el-menu-item>
        <admUserOpration v-if="isAdmin" />
      </el-menu>
    </el-col>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  components: { admUserOpration: () => import("../admSide/UserManage") },
  data: () => ({
    isAdmin: true,
    user: {
      user_id: null,
      user_name: null,
      user_pt: null,
      user_tel: null,
      user_sum: null,
      user_authority: null,
      User_inv_times: null
    }
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
    bus.$on(bus.user, data => {
      this.user = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.user);
  }
};
</script>
<style>
.link_beauty {
  text-decoration: none;
  color: rgb(230, 225, 219);
}
</style>
