<template>
  <div>
    <v-fade-transition>
      <notification
        v-if="alert"
        :notification="notification"
        @close="closeAlert"
      />
    </v-fade-transition>
    <v-expansion-panels
      v-model="activeItemsInPanel"
      :style="{ maxWidth: '900px', margin: 'auto' }"
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span class="text-h6 font-weight-light">
            Add a new Timeline Element
          </span>
          <template v-slot:actions>
            <v-btn color="white" class="text--primary" fab small>
              <v-icon v-show="!panelIsActive">mdi-plus</v-icon>
              <v-icon v-show="panelIsActive">mdi-minus</v-icon>
            </v-btn>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div style="margin: 4rem auto">
            <timeline-element-form :isLoading="isLoading" @add="addElement" />
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Notification from "./Notification.vue";
import TimelineElementForm from "./TimelineElementForm.vue";
import generateNotification from "./utils/generateNotification";
import sendPayload from "./utils/sendPayload";

import { mapActions } from "vuex";

export default {
  components: { Notification, TimelineElementForm },
  name: "TimelineElementAdd",
  data: () => ({
    activeItemsInPanel: undefined,
    alert: false,
    isLoading: false,
  }),
  methods: {
    addElement(payload) {
      const responseWithoutErrors = sendPayload(
        this.addElementAction,
        this,
        payload
      );

      this.notification = generateNotification(
        responseWithoutErrors,
        "Element added successfully!",
        "There was a problem adding the item."
      );

      this.alert = true;

      setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
    closeAlert() {
      this.alert = false;
    },
    ...mapActions(["addElementAction"], {
      incrementUnseenNotifitacionsCount:
        "incrementUnseenNotifitacionsCountActions",
    }),
  },
  computed: {
    panelIsActive() {
      return this.activeItemsInPanel !== undefined;
    },
  },
};
</script>

<style></style>
