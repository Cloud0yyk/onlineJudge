<template>
  <div class="home">
    <!--    <MDEditor :value="value" :handle-change="onChange" />-->
    <CodeEditor :value="value" :handle-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MDEditor from "@/components/MDEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const value = ref("1563135");
const onChange = (v: string) => {
  value.value = v;
  console.log(v);
  console.log("hello");
};
</script>
