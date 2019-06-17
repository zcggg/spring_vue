<template>
  <div>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>监考管理</span>
    </template>
    <el-menu-item index="2-1">
      <router-link :to="`/InvAdd`" class="link_beauty"
        >添加监考信息</router-link
      >
    </el-menu-item>
    <el-menu-item index="2-2">
      <router-link :to="`/InvDelete`" class="link_beauty"
        >删除监考信息</router-link
      >
    </el-menu-item>
    <el-menu-item index="2-3">
      <router-link :to="`/InvAlter`" class="link_beauty"
        >修改监考信息</router-link
      >
    </el-menu-item>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>监考分配管理</span>
    </template>
    <el-menu-item index="3-1">
      <router-link :to="`/InvDistributeAdd`" class="link_beauty"
        >监考分配</router-link
      >
    </el-menu-item>
    <el-menu-item index="3-2">
      <router-link :to="`/InvDistributeDelete`" class="link_beauty"
        >删除监考分配信息</router-link
      >
    </el-menu-item>
    <el-menu-item index="3-3">
      <router-link :to="`/InvDistributeAlter`" class="link_beauty"
        >修改监考分配信息</router-link
      >
    </el-menu-item>
  </div>
</template>
