<template>
  <ReloadPWA />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ReloadPWA from "./components/ReloadPWA.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ReloadPWA,
  },
});
</script>
