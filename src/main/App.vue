<template>
  <div id="app">
    <el-container>
      <el-header>
        <navigation id="navigation" />
      </el-header>
      <el-container class="sidebar_margin">
        <el-aside width="400px">
          <router-view :key="$route.path" name="side" />
        </el-aside>
        <el-main>
          <div id="routerview">
            <router-view :key="$route.path" />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getMain } from "./api/Main";
export default {
  components: {
    navigation: () => import("./views/sidebar/Navigation")
  },
  data: () => ({
    isAdmin: false
  }),
  created() {
    getMain();
  }
};
</script>
<style>
.sidebar_margin {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
}
</style>
