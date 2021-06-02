<template>
  <v-app-bar color="white" elevate-on-scroll fixed>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon @click="notificationCountIncrement">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-badge
      :content="notificationCount"
      :value="notificationCount"
      color="blue"
      overlap
    >
      <v-icon> mdi-bell </v-icon>
    </v-badge>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "TheHeader",
  data: () => ({}),
  methods: {
    ...mapMutations({
      notificationCountIncrement: "NOTIFICATION_COUNT_INCREMENT",
    }),
  },
  computed: {
    ...mapState({
      notificationCount: (state) => state.notificationCount,
    }),
  },
};
</script>

<style></style>
