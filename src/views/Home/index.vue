<template>
  <div class="home">
    <el-space class="home__posts" :fill="true" wrap size="large">
      <el-card shadow="hover" v-for="i in 15" :key="i">
        <template #header>
          <div>
            <span>Card name </span>
            <span>19 June</span>
          </div>
        </template>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          quisquam voluptate illum, veritatis omnis non impedit qui voluptatem
          dolores explicabo est a pariatur, aliquam quae officiis expedita ad
          dolorem. Nostrum.
        </div>
        <div>
          <el-tag type="info">Tag 3</el-tag>
          <el-button :icon="CollectionTag" circle />
        </div>
      </el-card>
    </el-space>
    <div class="home__filters">
      <el-input v-model="input" placeholder="Please input" size="large" />
      <el-select v-model="value" placeholder="Select" size="large" multiple>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-backtop class="home__backtop-btn" :right="50" :bottom="50" />
  </div>
</template>

<script lang="ts" setup>
import { CollectionTag } from "@element-plus/icons-vue";
import { ref } from "vue";

const input = ref("");

const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
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