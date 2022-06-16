<template>
  <section class="login">
    <el-card class="login__container">
      <h2 class="login__title">Log In</h2>
      <el-form :model="form" label-position="top" class="login__form">
        <el-form-item label="Email">
          <el-input
            v-model="form.email"
            type="email"
            placeholder="Please input email"
          />
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="Please input password"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Log In</el-button>
        </el-form-item>
        <router-link to="/signup">
          <el-link type="primary">Sign Up</el-link>
        </router-link>
      </el-form>
    </el-card>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const form = reactive({
  email: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  &__container {
    width: 100%;
    max-width: 500px;
  }

  &__title {
    text-align: center;
    margin-bottom: 25px;
  }

  &__form {
    width: 100%;
  }
}
</style>