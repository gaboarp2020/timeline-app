<template>
  <v-alert
    border="left"
    elevation="2"
    max-width="600"
    mode="out-in"
    width="90%"
    dense
    colored-border
    class="notification"
    :color="color"
    :icon="icon"
  >
    {{ notification.content }}
    <v-btn small slot="append" icon :color="color" @click="close">
      <v-icon>mdi-close-circle</v-icon>
    </v-btn>
  </v-alert>
</template>

<script>
import sendPayload from "./utils/sendPayload";

import { mapActions } from "vuex";

export default {
  name: "Notification",
  props: {
    notification: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    isLoading: false,
  }),
  methods: {
    close() {
      this.$emit("close");
    },
    createNotification() {
      sendPayload(this.addNotification, this, this.notification);
    },
    ...mapActions({
      addNotification: "addNotificationAction",
    }),
  },
  computed: {
    color() {
      return this.notification && this.notification.type === "error"
        ? "#ff5252"
        : "cyan";
    },
    icon() {
      return this.notification && this.notification.type === "error"
        ? "mdi-alert-circle"
        : "mdi-check-circle";
    },
  },
  watch: {
    notification: function () {
      this.createNotification();
    },
  },
  created() {
    this.createNotification();
  },
};
</script>
<style lang="scss" scoped>
.notification {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
}
</style>
