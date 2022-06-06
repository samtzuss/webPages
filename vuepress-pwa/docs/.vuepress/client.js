import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import store from './store/index.js'
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
console.log('------------------------------ 111111111111111111111111---------------')
// axios
// import { axios } from 'axios';
// window.globalApi = Object.freeze({
// 	axios
// });
// window.axios = axios;

const app = createApp({})

export default defineClientConfig({
  setup(){
    console.log('------------------------------ 222222222 ---------------')
    app.use(createPinia())
    console.log('++++++++++++++after app.use ++++++++++++')
    // app.mixin({ store: store })

    app.use(ElementPlus)
    Object.keys(ElIcons).forEach(key => {
      app.component(key, ElIcons[key])
    })
  }
})

// component ref: https://stackoverflow.com/questions/69368068/how-to-add-a-component-in-vuepress-v-2-0-0
// correct appEnhance.js, not clientAppEnhance.js

// vuex ref: https://jasongrass.gitee.io/archive/vuepress-blog/vuepress-vuex.html