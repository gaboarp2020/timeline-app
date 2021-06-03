<template>
  <v-app>
    <the-header />
    <v-main class="mt-16">
      <router-view />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheFooter,
    TheHeader,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
