<template>
  <div class="home">
    <MDEditor :value="value" :handle-change="onChange" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MDEditor from "@/components/MDEditor.vue"; // @ is an alias to /src

const value = ref("");
const onChange = (v: string) => {
  value.value = v;
};
</script>
