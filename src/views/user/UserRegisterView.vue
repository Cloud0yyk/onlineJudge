<template>
  <div class="login-background">
    <div class="login-logo">
      <img src="../../assets/OJ.png" alt="" width="200" />
    </div>
    <div class="login-form-container">
      <div style="padding: 20px 20px 0 20px">
        <p style="font-size: 18px; text-align: left">
          {{ isRegister ? "注册" : "登录" }}
        </p>
      </div>

      <div class="sub-title">
        <p class="tip">{{ isRegister ? "已有账号?" : "没有账号吗?" }}</p>
        <p class="tip-swich" @click="switchType">
          {{ isRegister ? "点此登录" : "点此注册" }}
        </p>
      </div>

      <div style="padding: 20px 20px 40px 20px">
        <LoginForm v-if="!isRegister"></LoginForm>
        <RegisterForm v-if="isRegister" @switchType="switchType"></RegisterForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "@/views/form/LoginForm.vue";
import RegisterForm from "@/views/form/RegisterForm.vue";

const isRegister = ref(false);
const switchType = () => {
  isRegister.value = !isRegister.value;
};
</script>

<style scoped>
.login-background {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/login-background.jpg") no-repeat 50%;
  background-size: cover;
}

.login-logo {
  position: absolute;
  top: 12px;
  left: 12px;
}

.login-form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.sub-title {
  margin-top: 16px;

  .tip {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;

    &:first-child {
      color: #4a4a4a;
    }

    &:last-child {
      color: #000000;
      cursor: pointer;
    }
  }

  .tip-swich {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;

    &:first-child {
      color: #4a4a4a;
    }

    &:last-child {
      color: #000000;
      cursor: pointer;
    }
  }
}
</style>
