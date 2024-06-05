<template>
  <div id="code-editor" ref="codeEditorRef" style="min-height: 400px" />
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw, withDefaults, defineProps, watch } from "vue";
import * as monaco from "monaco-editor";

/**
 * 定义组件属性类型
 */
interface Props {
  value: string;
  language?: string;
  handleChange: (v: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  language: () => "java",
  handleChange: (v: string) => {
    console.log(v);
  },
});

const codeEditorRef = ref();
const codeEditor = ref();

watch(
  () => props.language,
  () => {
    if (codeEditor.value) {
      monaco.editor.setModelLanguage(
        toRaw(codeEditor.value).getModel(),
        props.language
      );
    }
  }
);

onMounted(() => {
  if (!codeEditorRef.value) return;

  // Hover on each property to see its docs!
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: props.value,
    language: "java",
    automaticLayout: true,
    minimap: {
      enabled: true,
    },
    // lineNumbers: "off",
    // roundedSelection: false,
    // scrollBeyondLastLine: false,
    colorDecorators: true,
    readOnly: false,
    theme: "vs-dark",
  });

  codeEditor.value.onDidChangeModelContent(() => {
    // console.log("目前内容为:", toRaw(codeEditor.value).getValue());
    props.handleChange(toRaw(codeEditor.value).getValue());
  });
});
</script>

<style scoped></style>
