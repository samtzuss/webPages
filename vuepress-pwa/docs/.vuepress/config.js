const { path } = require('@vuepress/utils')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('@vuepress/theme-default')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  title: '未來通匯雲科技金融',
  description: '這是一個金融服務',
  head: [ // 注入到當前頁面的 HTML <head> 中的標簽
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否開啟 PWA
  base: '/webPages/tg-pwa/', // 部署到github相關的配置
  markdown: {
    lineNumbers: true // 代碼塊是否顯示行號
  },
  theme: defaultTheme({
    logo: '/images/photo.jpg',
    navbar:[ // 導航欄配置
      { text: '交易', children: [
        { text: '轉帳', link: '/transaction/transfer.html' },
        { text: '預約', link: '/transaction/book.html' }
      ]},
      { text: '查詢', children: [
        { text: '約定帳號', link: '/query/account_binding.html' },
        { text: '薪轉比率', link: '/query/salary_rate.html' },
        { text: '歷史交易', link: '/query/history_record.html' },
        { text: '匯率試算', link: '/query/xchange.html' }
      ]},
      { text: '設定', children: [
        { text: '帳號綁定', link: '/setting/account_binding.html' },
        { text: '薪轉比率', link: '/setting/salary_rate.html' },
        { text: '基本資料', link: '/setting/primary_data.html' }
      ]},
      // { text: '控制台', children: [
      //   { text: '訊息寄發', link: '/control/message.html' },
      //   { text: '登出', link: '/control/logout.html' }
      // ]}
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/tw/': {
        selectLanguageName: '繁體中文',
      },
    },
    // 在此全局加載模組
    clientAppEnhanceFiles: path.resolve(__dirname, './client.js'),
    darkMode: false,
    sidebar: false, // 側邊欄配置
    sidebarDepth: 2
  }),
  // default vite
  // bundler: '@vuepress/bundler-webpack',
  plugins: [
    // pwaPlugin({
    //   skipWaiting: true,
    //   serviceWorkerFilename: 'service-worker.js'
    // }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    // [
    //   '@vuepress/pwa',
    //   {
    //     skipWaiting: true,
    //   },
    // ]
  ],
  dest: '../docs/tg-pwa', // 原root在 project root
  bundler: viteBundler({
    viteOptions:{
      // 防止 [WARNING] "@charset" must be the first rule in the file
      css:{
        preprocessorOptions:{
          scss:{
            charset: false
          }
        },
        postcss:{
          plugins:[
            {
              postcssPlugin: 'internal:charset-removal',
              AtRule:{
                charset:(atRule) => {
                  if (atRule.name === 'charset') {
                    atRule.remove();
                  }
                }
              }
            }
          ],
        },
      }
    },
    vuePluginOptions:{
      template:{
        compilerOptions:{
          whitespace: 'condense'
        }
      }
    },
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'en-US',
        title: 'English',
        description: 'English version',
      },
      '/tw/': {
        lang: 'zh-TW',
        title: '繁中',
        description: '繁體中文版',
      },
    }
  }),

  chainWebpack(config) {
    config.externals([/^(vue|vue-router)$/])
  }
}

// npm i -D @vuepress/plugin-register-components@next
