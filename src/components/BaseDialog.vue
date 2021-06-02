<template>
  <v-dialog v-model="dialog" max-width="290" @click:outside="close">
    <v-card>
      <v-card-title class="text-h5">{{ title }}</v-card-title>

      <v-card-text>{{ text }}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="callback">Yes</v-btn>
        <v-btn color="green darken-1" text @click="close"> No </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BaseDialog",
  props: {
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    openDialog: {
      type: Boolean,
      default: false,
    },
  },
  data: ({ openDialog }) => ({
    dialog: openDialog,
  }),
  methods: {
    callback() {
      this.$emit("callback");
      this.close();
    },
    close() {
      this.dialog = false;
      this.$emit("close");
    },
  },
};
</script>

<style></style>
