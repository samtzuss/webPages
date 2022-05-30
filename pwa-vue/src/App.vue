<template>
  <ReloadPWA />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite v2.1" />
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ReloadPWA from "./components/ReloadPWA.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ReloadPWA,
  },
  setup() {
    const states = reactive({
      deferredPrompt: null,
    });
    onMounted(() => {
      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        states.deferredPrompt = e;
        showInstallPromotion();
        // Optionally, send analytics event that PWA install promo was shown.
        console.log(`'beforeinstallprompt' event was fired.`);
      });
      window.addEventListener("appinstalled", () => {
        states.deferredPrompt = null;
      });
      document.querySelector("#app").addEventListener("click", () => {
        if (states.deferredPrompt) {
          states.deferredPrompt.prompt();
          states.deferredPrompt = null;
        }
      });
    });
  }
});
</script>
