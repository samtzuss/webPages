// config.js中clientAppEnhanceFiles定義此檔名

// import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import stores from './store/index.js'
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import { createI18n } from 'vue-i18n'
import tw from './locale/zh-TW.json'
import en from './locale/en-US.json'

// axios
// import { axios } from 'axios';
// window.globalApi = Object.freeze({
// 	axios
// });
// window.axios = axios;

// const app = createApp({})

export default defineClientConfig({
  setup(){
  },
  enhance({ app, siteData }) {
    app.use(createPinia())

    // app.mixin({ store: store })

    app.use(ElementPlus)
    Object.keys(ElIcons).forEach(key => {
      app.component(key, ElIcons[key])
    });

    const i18n = createI18n({
      legacy: false,
      locale: siteData.lang,
      fallbackLocale: siteData.lang,
      messages: {
        'zh-TW': tw,
        'en-US': en
      }
    });
    app.use(i18n);
  }
})

// component ref: https://stackoverflow.com/questions/69368068/how-to-add-a-component-in-vuepress-v-2-0-0
// correct appEnhance.js, not clientAppEnhance.js

// vuex ref: https://jasongrass.gitee.io/archive/vuepress-blog/vuepress-vuex.html