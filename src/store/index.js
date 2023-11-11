import { defineStore } from 'pinia'

export const ToDo = defineStore('todo', {
   state: () =>
   ({
      itemList: [
         {
            title: "gdhsjfksajdhgf adsg",
            done: false,
            deathLine: null,
         },
         {
            title: "gdhsjfksajdhgf adsg",
            done: false,
            deathLine: null,
         },
         {
            title: "gdhsjfksajdhgf adsg",
            done: false,
            deathLine: null,
         },
      ]
   }),

   getters: {
      List: (state) => state.itemList
   },

   actions: {
      Delete(index)
      {
         this.itemList.splice(index, 1)
      },

      Append(str)
      {
         this.itemList.push({
            title: str,
            done: false,
            deathLine: null,
         })
      }
   }
})