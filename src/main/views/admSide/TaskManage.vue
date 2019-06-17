<template>
  <div>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>任务管理</span>
    </template>
    <el-menu-item index="2-1">
      <router-link :to="`/TaskAdd`" class="link_beauty">添加任务</router-link>
    </el-menu-item>
    <el-menu-item index="2-2">
      <router-link :to="`/TaskDelete`" class="link_beauty"
        >删除任务</router-link
      >
    </el-menu-item>
    <el-menu-item index="2-3">
      <router-link :to="`/TaskAlter`" class="link_beauty">修改任务</router-link>
    </el-menu-item>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>任务分配管理</span>
    </template>
    <el-menu-item index="3-1">
      <router-link :to="`/TaskRecordAdd`" class="link_beauty"
        >任务分配</router-link
      >
    </el-menu-item>
    <el-menu-item index="3-2">
      <router-link :to="`/TaskRecordDelete`" class="link_beauty"
        >删除任务分配</router-link
      >
    </el-menu-item>
  </div>
</template>
