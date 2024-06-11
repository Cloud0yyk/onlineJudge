<template>
  <div>
    <div style="width: 320px">
      <a-form
        ref="formRef"
        :data="form"
        :rules="rules"
        :colon="true"
        :label-width="0"
        @reset="onReset"
        @submit="handleSubmit"
      >
        <a-form-item name="username" label="账号">
          <a-input
            v-model="form.userAccount"
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
            v-model="form.userPassword"
            clearable
            placeholder="请输入密码"
          />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" style="width: 120px">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<script setup>
import { reactive, ref } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { DesktopOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 表单信息
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
});

//获取路由实例
const router = useRouter();
const store = useStore();
//获取form实例
const formRef = ref(null);

const rules = ref({
  username: [
    { required: true, message: "Please enter your username", trigger: "blur" },
    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please enter your password", trigger: "blur" },
    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
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
  const res = await UserControllerService.userLoginUsingPost(form);
  // 登录成功，跳转到主页
  if (res.code === 0) {
    await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登陆失败，" + res.message);
  }
};
</script>
