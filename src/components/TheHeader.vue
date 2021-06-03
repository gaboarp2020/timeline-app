<template>
  <div>
    <v-app-bar color="white" class="nav__bar" elevate-on-scroll fixed>
      <v-toolbar-title>Timeline App</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-badge
        :content="notificationCount"
        :value="notificationCount"
        color="red"
        overlap
      >
        <v-icon color="secndary" @click="notificationMenu = !notificationMenu">
          mdi-bell
        </v-icon>
      </v-badge>

      <v-fade-transition>
        <v-card
          v-show="notificationMenu"
          class="notification__menu"
          width="320"
          tile
        >
          <v-card-title class="text-h5"
            >Notifications
            <v-spacer></v-spacer>
            <v-icon right @click="notificationMenu = !notificationMenu">
              mdi-close
            </v-icon></v-card-title
          >
          <v-list-item
            v-for="(notification, index) in notifications"
            :key="index"
            two-line
          >
            <v-list-item-content>
              <v-list-item-title>
                {{
                  `${notification.type} - ${notification.time}`
                }}</v-list-item-title
              >
              <v-list-item-subtitle>
                {{ notification.content }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="clearNotificationAction">
              <v-icon>mdi-notification-clear-all</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-fade-transition>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TheHeader",
  data: () => ({
    notificationMenu: false,
  }),
  methods: {
    ...mapActions(["clearNotificationAction"]),
  },
  computed: {
    ...mapState({
      notificationCount: (state) => state.notificationCount,
      notifications: (state) => state.notifications,
    }),
  },
};
</script>

<style lang="scss" scoped>
.nav__bar {
  position: relative;
}
.notification__menu {
  position: absolute;
  top: 60px;
  right: 10px;
}
</style>
