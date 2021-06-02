<template>
  <div>
    <v-fade-transition>
      <notification
        v-if="alert"
        :notification="notification"
        @close="closeAlert"
      />
    </v-fade-transition>
    <base-dialog
      v-if="dialog"
      title="Delete"
      text="Are you sure to delete this element?"
      :openDialog="dialog"
      @callback="deleteElement"
      @close="closeDialog"
    >
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";
import Notification from "./Notification.vue";
import sendPayload from "./utils/sendPayload";
import generateNotification from "./utils/generateNotification";

import { mapActions } from "vuex";

export default {
  components: {
    BaseDialog,
    Notification,
  },
  name: "TimelineElementDeleteDialog",
  props: {
    elementId: {
      type: String,
      default: "",
    },
    openDialog: {
      type: Boolean,
      require: true,
    },
  },
  data: ({ openDialog, elementId }) => ({
    alert: false,
    dialog: openDialog,
    elementToDeleteId: elementId,
    isLoading: false,
    notification: null,
  }),
  methods: {
    closeAlert() {
      this.alert = false;
    },
    closeDialog() {
      this.dialog = false;
    },
    deleteElement() {
      const responseWithoutErrors = sendPayload(
        this.deleteElementAction,
        this,
        this.elementToDeleteId
      );

      this.notification = generateNotification(
        responseWithoutErrors,
        "Element removed successfully!",
        "There was a problem deleting the item."
      );

      this.alert = true;
    },

    ...mapActions(["deleteElementAction"]),
  },
  watch: {
    elementId: function (newVal) {
      this.dialog = true;
      this.elementToDeleteId = newVal;
    },
  },
};
</script>

<style></style>
