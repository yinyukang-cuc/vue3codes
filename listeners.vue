<template>
    <div>child component</div>
    <input name="compC" type="text" v-model="message" v-bind="attrs" />
</template>

<script setup>
  import { useAttrs,defineModel } from 'vue';
  const attrs = useAttrs(); // 父组件@keyup="receive",这里attrs的绑定（vue2的$listeners)
  // 指定了触发事件的元素
  const message = defineModel()
</script>

<style scoped>

</style>
