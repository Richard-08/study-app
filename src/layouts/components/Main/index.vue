<template>
  <router-view #default="{ Component, route }">
    <el-main>
      <transition name="el-fade-in-linear" mode="out-in">
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </el-main>
  </router-view>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>