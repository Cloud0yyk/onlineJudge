<template>
  <div>
    <div style="width: 320px">
      <a-form
        ref="formRef"
        :data="formData"
        :rules="rules"
        :colon="true"
        :label-width="0"
        @reset="onReset"
        @submit="handleSubmit"
      >
        <a-form-item name="username" label="账号">
          <a-input
            v-model="formData.userAccount"
            clearable
            placeholder="请输入账户名"
          >
            <template #prefix-icon>
              <DesktopOutlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" label="密码">
          <a-input-password
            v-model="formData.userPassword"
            clearable
            placeholder="请输入密码"
          >
            <template #prefix-icon>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="confirmPassword" label="确认">
          <a-input-password
            v-model="formData.checkPassword"
            clearable
            placeholder="请确认密码"
          >
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" style="width: 120px">
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<script setup>
import { reactive, ref } from "vue";
import message from "@arco-design/web-vue/es/message";
import { DesktopOutlined, LockOutlined } from "@ant-design/icons";

import { defineEmits } from "vue";

import { UserControllerService, UserLoginRequest } from "../../../generated";
import { useRouter } from "vue-router";

const emit = defineEmits(["switchType"]);

//获取路由实例
const router = useRouter();

//获取form实例
const formRef = ref(null);
const formData = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});
const rules = ref({
  username: [
    { required: true, message: "Please enter your username", trigger: "blur" },
    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please enter your password", trigger: "blur" },
    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Please confirm your password",
      trigger: "blur",
    },
    // { validator: validatePasswordConfirm, trigger: 'blur' },
    {
      validator(value) {
        console.log("confirmPassword:", formData.confirmPassword);
        if (formData.confirmPassword === formData.password) {
          return true;
        } else {
          return new Error("两次输入的密码不一致");
        }
      },
      trigger: "blur",
    },
  ],
});

const onReset = () => {
  message.success("重置成功");
};

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(formData);
  // 登录成功，跳转到主页
  if (res.code === 0) {
    message.success("注册成功");
    location.reload();
  } else {
    message.error("注册失败，" + res.message);
  }
};
</script>
