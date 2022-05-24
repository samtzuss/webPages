# pwa/vue3

https://medium.com/the-web-tub/creating-your-first-vue-js-pwa-project-22f7c552fb34

mkdir pwa-vue-app-1
cd pwa-vue-app-1
mkdir dist src static
mkdir src\components
npm init
npm i -D @babel/core @babel/preset-env babel-loader clean-webpack-plugin copy-webpack-plugin css-loader html-webpack-plugin vue-loader vue-style-loader vue-template-compiler webpack webpack-cli webpack-dev-server
npm i vue vue-router
npm install

[install yarn latest]
https://polinwei.com/npm-vs-yarn/
npm i -g yarn@latest
yarn set version berry
yarn set version latest (v3.21)

Development of a Progressive Web App with Vue 3
https://rubenr.dev/en/pwa-vite/
yarn create vite pwa-vue --template vue
cd pwa-vue
yarn add workbox-window
yarn (install)
yarn dev
yarn build
