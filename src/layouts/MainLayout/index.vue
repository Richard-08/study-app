<template>
  <div class="layout">
    <Sidebar />
    <div class="layout__container">
      <Header />
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;

  &__container {
    flex: 1;
    height: 100%;
  }
}
</style>