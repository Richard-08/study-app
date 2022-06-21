<template>
  <div class="home">
    <div class="home__posts">
      <PostsList />
    </div>
    <div class="home__filters">
      <Filters />
    </div>
    <el-backtop class="home__backtop-btn" :right="50" :bottom="50" />
  </div>
</template>

<script lang="ts" setup>
import Filters from "./components/Filters.vue";
import PostsList from "./components/PostsList.vue";
import { CollectionTag } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  &__posts {
    flex: 4;
  }

  &__filters {
    flex: 1;
    padding: 0 15px;
  }

  &__backtop-btn {
    width: 60px;
    height: 60px;
  }
}
</style>