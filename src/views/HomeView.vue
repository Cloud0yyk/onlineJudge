<template>
  <div class="home">
    <CodeEditor :value="codeValue" :handle-change="onCodeChange" />
    <MDEditor :value="mdValue" :handle-change="onMdChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MDEditor from "@/components/MDEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const mdValue = ref("");
const codeValue = ref("");

const onMdChange = (v: string) => {
  mdValue.value = v;
  // console.log(value.value);
  // console.log("hello");
};

const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>
