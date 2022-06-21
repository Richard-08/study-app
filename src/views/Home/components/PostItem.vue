<template>
  <el-card shadow="hover" class="post">
    <template #header>
      <router-link to="/home/1">
        <section class="post__header">
          <h2 class="post__title">Card name</h2>
          <span>19 June</span>
        </section>
      </router-link>
    </template>
    <div class="post__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
      quisquam voluptate illum, veritatis omnis non impedit qui voluptatem
      dolores explicabo est a pariatur, aliquam quae officiis expedita ad
      dolorem. Nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Voluptatum quisquam voluptate illum, veritatis omnis non impedit qui
      voluptatem dolores explicabo est a pariatur, aliquam quae officiis
      expedita ad dolorem. Nostrum.
    </div>
    <div class="post__footer">
      <el-tag type="info">Tag 3</el-tag>
      <el-button :icon="CollectionTag" circle @click.capture="collect" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { CollectionTag } from "@element-plus/icons-vue";

const collect = () => {};
</script>

<style lang="scss" scoped>
.post {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
  }

  &__text {
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    line-height: 120%;
  }

  &__footer {
    padding-top: 15px;
  }
}
</style>