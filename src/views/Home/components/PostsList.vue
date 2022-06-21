<template>
  <div class="home">
    <el-space class="home__posts" :fill="true" wrap size="large">
      <template v-for="i in 15" :key="i">
        <PostItem />
      </template>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import PostItem from "./PostItem.vue";
import { CollectionTag } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
</style>