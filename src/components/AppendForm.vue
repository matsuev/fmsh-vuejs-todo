<template>
   <el-form class="my-form">
      <el-form-item label="Название задачи">
         <el-input v-model="newToDo" />
      </el-form-item>
      <el-button type="primary" @click="onAppendClick">Append</el-button>
   </el-form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['append'])

const newToDo = ref('')

function onAppendClick()
{
   emit('append', newToDo.value)
   newToDo.value = ''
}
</script>

<style>
.my-form {
   max-width: 400px;
}
</style>