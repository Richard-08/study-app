<template>
  <el-card shadow="hover" class="post">
    <template #header>
      <router-link to="/1">
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
    </div>
  </el-card>
</template>