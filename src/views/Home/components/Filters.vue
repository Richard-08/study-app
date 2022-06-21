<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="Search">
      <el-input
        v-model="form.search"
        placeholder="Search"
        size="large"
        :prefix-icon="Search"
      />
    </el-form-item>
    <el-form-item label="Tags">
      <el-select-v2
        v-model="form.tags"
        placeholder="Tags"
        :options="options"
        size="large"
        multiple
        clearable
        style="width: 100%"
      >
      </el-select-v2>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        size="large"
        @click="onSubmit"
        >Apply</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { reactive } from "vue";

const form = reactive({
  search: "",
  tags: "",
});

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

const onSubmit = () => {
  console.log("Submit filters");
};
</script>

<style lang="scss" scoped>
</style>