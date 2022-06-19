<template>
  <el-header class="header">
    <el-menu
      :default-active="activeIndex"
      class="header__menu"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu>
        <template #title>
          <el-button size="large" circle>
            <el-icon><Avatar /></el-icon>
          </el-button>
        </template>
        <el-menu-item index="2-1">Profile</el-menu-item>
        <el-menu-item index="2-2">Log Out</el-menu-item>
      </el-sub-menu>
      <el-menu-item style="height: auto" index="3" @click="toggleDark()">
        <el-button size="large" circle>
          <el-icon><Moon v-if="isDark" /><Sunny v-else /></el-icon>
        </el-button>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";

import { Moon, Sunny, Avatar } from "@element-plus/icons-vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 999;

  &__menu {
    .el-icon {
      margin: 0;
    }
  }
}
</style>