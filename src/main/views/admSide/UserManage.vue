<template>
  <div>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>用户管理</span>
    </template>
    <el-menu-item index="1-2">
      <router-link :to="`/UserAdd`" class="link_beauty">添加用户</router-link>
    </el-menu-item>
    <el-menu-item index="1-3">
      <router-link :to="`/UserDelete`" class="link_beauty"
        >删除用户</router-link
      >
    </el-menu-item>
    <el-menu-item index="1-4">
      <router-link :to="`/UserAlter`" class="link_beauty">修改用户</router-link>
    </el-menu-item>
  </div>
</template>
