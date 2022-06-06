import { defineStore } from "pinia"

export const stores = defineStore('storeId', {
  // id: 'store',
  state: ()=> {
    return {
      count: 1,
      textVar: 'abc'
    }
  }
})
