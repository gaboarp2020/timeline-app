<template>
  <v-stepper class="stepper" v-model="e1">
    <v-stepper-header>
      <v-stepper-step class="text-h5" :complete="e1 > 1" step="1">
        Add
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step class="text-h5" :complete="e1 > 2" step="2">
        Update
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step class="text-h5" step="3"> Delete </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" height="200px">
          <v-card-text class="text-h6"
            >Add a new Element on the Timeline (e.g, a historical event) by
            clicking "Add a new Timeline Element" and filling in the
            form.</v-card-text
          >
        </v-card>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" height="200px">
          <v-card-text class="text-h5"
            >Update any of the existing Element in the Timeline by clicking on
            the pencil icon and filling in the form.</v-card-text
          >
        </v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" height="200px">
          <v-card-text class="text-h5"
            >You can also delete a specific element by clicking on the trash
            icon.
          </v-card-text>
        </v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "TheStepper",
  data: () => ({
    e1: 1,
  }),
};
</script>

<style>
.stepper {
  width: 90%;
  max-width: 900px;
}
</style>
