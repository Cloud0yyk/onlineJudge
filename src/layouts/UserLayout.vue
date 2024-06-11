<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <!--      <a-layout-header class="header">用户布局 </a-layout-header>-->
      <!--      <a-layout-content class="content">-->
      <router-view />
      <!--      </a-layout-content>-->
      <!--      <a-layout-footer class="footer">-->
      <!--        <a href="www.baidu.com" target="_blank">编程导航知识星球 by </a>-->
      <!--      </a-layout-footer>-->
    </a-layout>
  </div>
</template>
<style scoped>
#userLayout {
}

#userLayout .header {
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
