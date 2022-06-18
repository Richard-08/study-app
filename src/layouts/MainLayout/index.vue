<template>
  <Header />
  <el-container>
    <Sidebar />
    <Main />
  </el-container>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
</script>

<style lang="scss" scoped>
</style>