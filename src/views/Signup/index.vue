<template>
  <section class="register">
    <el-card class="register__container">
      <h2 class="register__title">Sign Up</h2>
      <el-form :model="form" label-position="top" class="register__form">
        <el-form-item label="Username" required>
          <el-input
            v-model="form.username"
            type="text"
            placeholder="Please input username"
            size="large"
          />
        </el-form-item>
        <el-form-item label="Email" required>
          <el-input
            v-model="form.email"
            type="email"
            placeholder="Please input email"
            size="large"
          />
        </el-form-item>
        <el-form-item label="Password" required>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="Please input password"
            show-password
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 100%"
            size="large"
            @click="onSubmit"
            >Sign Up</el-button
          >
        </el-form-item>
        <footer class="register__footer">
          Already have an account?
          <router-link to="/login"
            ><el-link type="primary">Log In here</el-link></router-link
          >
        </footer>
      </el-form>
    </el-card>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const form = reactive({
  username: "",
  email: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style lang="scss" scoped>
.register {
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

  &__footer {
    font-size: 14px;
    text-align: center;
  }
}
</style>