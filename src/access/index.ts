import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  // if (to.meta?.access === "canAdmin") {
  //   if (store.state.user.loginUser?.role !== "admin") {
  //     next("/noAuth");
  //     return;
  //   }
  // }

  const loginUser = store.state.user.loginUser;

  // 如果之前没有登陆过，自动登录
  if (!loginUser || !loginUser.userRole) {
    // await: 等用户登录成功后，再执行后续的代码
    await store.dispatch("user/loginUser", loginUser);
  }

  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  // 要跳转的页面必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 用户未登录, 跳转到登录界面
    if (!loginUser || !loginUser.useRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果已经登录，但是权限不足，则跳转到无权限界面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
