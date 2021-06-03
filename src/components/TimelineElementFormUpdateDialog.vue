<template>
  <div>
    <v-fade-transition>
      <notification
        v-if="alert"
        :notification="notification"
        @close="closeAlert"
      />
    </v-fade-transition>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        @click:outside="closeDialog"
      >
        <timeline-element-form
          v-if="dialog"
          :element="elementToUpdate"
          :isLoading="isLoading"
          @close="closeDialog"
          @update="updateElement"
        >
          <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
        </timeline-element-form>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Notification from "./Notification.vue";
import TimelineElementForm from "./TimelineElementForm.vue";
import generateNotification from "./utils/generateNotification";
import sendPayload from "./utils/sendPayload";

import { mapActions } from "vuex";

export default {
  components: {
    Notification,
    TimelineElementForm,
  },
  name: "TimelineElementUpdateDialog",
  props: {
    element: {
      type: Object,
      default: null,
    },
    openDialog: {
      type: Boolean,
      require: true,
    },
  },
  data: (props) => ({
    alert: false,
    dialog: props.openDialog,
    elementToUpdate: props.element,
    isLoading: false,
    notification: null,
  }),
  methods: {
    closeAlert() {
      this.alert = false;
    },
    closeDialog() {
      this.dialog = false;
      this.elementToUpdate = {};
    },
    async updateElement(payload) {
      const responseWithoutErrors = await sendPayload(
        this.updateElementAction,
        // this.asyncUpdateElementAction,
        this,
        payload
      ).then((res) => {
        return res.error;
      });

      this.notification = generateNotification(
        responseWithoutErrors,
        "Element updated successfully!",
        "There was a problem updating the item."
      );

      this.alert = true;

      setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
    ...mapActions(["updateElementAction", "asyncUpdateElementAction"]),
  },
  watch: {
    element: function (newVal) {
      this.dialog = true;
      this.elementToUpdate = newVal;
    },
  },
};
</script>

<style></style>
