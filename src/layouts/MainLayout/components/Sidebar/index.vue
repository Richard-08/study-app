<template>
  <el-aside class="sidebar">
    <el-menu default-active="2" class="sidebar__menu" collapse="true">
      <el-menu-item index="2">
        <el-icon><HomeFilled /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Collection /></el-icon>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  HomeFilled,
  Setting,
  Collection,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  width: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  &__menu {
    width: 100%;
    height: 100%;
  }
}
</style>