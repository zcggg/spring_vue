<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link :to="`/MainPage`" class="link_beauty">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="`/UserPage`" class="link_beauty"
          >用户管理</router-link
        >
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="`/InvPage`" class="link_beauty">监考管理</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="`/TaskPage`" class="link_beauty"
          >任务管理</router-link
        >
      </el-menu-item>
      <el-menu-item index="5">
        <router-link :to="`/NoticePage`" class="link_beauty"
          >通知管理</router-link
        >
      </el-menu-item>
      <el-menu-item index="6">
        <router-link :to="`/MyPage`" class="link_beauty">我的</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link :to="`/Login`" class="link_beauty" @click="quit()"
          >退出</router-link
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  data() {
    return {
      activeIndex2: "1",
      token: null
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    bus.$on(bus.e, data => {
      alert(data);
    });
  },
  quit() {
    this.token = null;
    sessionStorage.setItem("token");
  },
  beforeDestroy() {
    bus.$off(bus.e);
  }
};
</script>
<style>
.link_beauty {
  text-decoration: none;
  color: rgb(230, 225, 219);
}
</style>
