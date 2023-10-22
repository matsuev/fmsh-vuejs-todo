<template>
   <div>Append form</div>
   <input v-model="newToDo" />
   <button @click="onAppendClick">Append</button>
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