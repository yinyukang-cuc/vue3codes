<template>
  <input v-model="modelValue">
  <input :value="props.modelValue" :input="emits('update:modelValue')">
</template>
<script setup lang="ts">

import {defineModel} from 'vue'
const modelValue = defineModel()

//  const modelValue = defineModel('count',{default:0}) // 指定props名称
//  等价于
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
</script>



