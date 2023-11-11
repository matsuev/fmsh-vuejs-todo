<template>
   <h2>ToDo Application</h2>
   <ToDoList :list="ToDo().List" @delete="ToDo().Delete" />
   <AppendForm @append="ToDo().Append" />
</template>

<script setup>
import AppendForm from '@/components/AppendForm.vue';
import ToDoList from '@/components/ToDoList.vue';
import { ToDo } from '@/store/todo_store.js';
</script>