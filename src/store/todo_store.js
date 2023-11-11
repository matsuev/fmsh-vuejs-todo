import { defineStore } from 'pinia'

export const ToDo = defineStore('todo', {
   // STATE
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

   // GETTERS
   getters: {
      List: (state) => state.itemList,

      ListDone: (state) => state.itemList.filter((item) => item.done)


   },

   // ACTIONS
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