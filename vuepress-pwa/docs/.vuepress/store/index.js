import { defineStore } from "pinia"

export const stores = defineStore('storeId', {
  state: ()=> {
    return {
      count: 1,
      textVar: 'abc'
    }
  }
})
