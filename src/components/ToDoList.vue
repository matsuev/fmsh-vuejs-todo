<template>
   <div class="list">
      <ListItem v-for="(item, index) in list" :content="item" :key="index" @mydelete="onDelete(index)" />
   </div>
</template>

<script setup>
import ListItem from './ListItem.vue';

defineProps(['list'])
const emit = defineEmits(['delete'])

function onDelete(index)
{
   emit('delete', index)
}

</script>

<style>
.list {
   margin: 20px 0px 50px 20px;
   padding: 20px;
   border: 1px solid black;
}
</style>