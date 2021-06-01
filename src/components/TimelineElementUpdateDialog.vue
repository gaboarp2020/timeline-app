<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      @click:outside="closeDialog"
    >
      <timeline-element-form :element="elementToUpdate" @close="closeDialog">
        <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
      </timeline-element-form>
    </v-dialog>
  </v-row>
</template>

<script>
import TimelineElementForm from "./TimelineElementForm.vue";

export default {
  components: {
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
    dialog: props.openDialog,
    elementToUpdate: props.element,
  }),
  methods: {
    closeDialog() {
      this.dialog = false;
      this.elementToUpdate = {};
    },
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
