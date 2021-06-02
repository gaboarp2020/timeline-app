<template>
  <v-app>
    <the-header />
    <v-main class="my-16">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
