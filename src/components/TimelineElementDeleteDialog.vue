<template>
  <base-dialog
    v-if="dialog"
    title="Delete"
    text="Are you sure to delete this element?"
    :openDialog="dialog"
    @callback="deleteElement"
    @close="closeDialog"
  >
  </base-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";
import sendPayload from "./utils/sendPayload";

import { mapActions } from "vuex";

export default {
  components: {
    BaseDialog,
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
    dialog: openDialog,
    elementToDeleteId: elementId,
    isLoading: false,
  }),
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    deleteElement() {
      sendPayload(this.deleteElementAction, this, this.elementToDeleteId);
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
