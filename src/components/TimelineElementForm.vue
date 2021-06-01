<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <v-select
        v-model="newElement.year"
        :items="years"
        label="Year"
      ></v-select>
      <validation-provider
        v-slot="{ errors }"
        name="Title"
        rules="required|max:32|min:4"
      >
        <v-text-field
          v-model="newElement.title"
          :counter="32"
          :error-messages="errors"
          label="Title"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Description"
        rules="required|max:225|min:6"
      >
        <v-textarea
          v-model="newElement.description"
          :counter="225"
          :error-messages="errors"
          label="Description"
          required
        ></v-textarea>
      </validation-provider>

      <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </validation-observer>
</template>

<script>
// @ts-nocheck
import generateArrayOfYears from "../components/utils/generateArrayOfYears";

import { v4 as uuidv4 } from "uuid";
import { required, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { mapActions } from "vuex";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    element: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    newElement: {
      id: "",
      year: "",
      title: "",
      description: "",
    },
  }),

  methods: {
    ...mapActions({
      addElement: "addElementAction",
      incrementUnseenNotifitacionsCount:
        "incrementUnseenNotifitacionsCountActions",
    }),
    submit() {
      const isValid = this.$refs.observer.validate();

      if (!isValid) {
        return;
      }

      if (this.props && this.props.element) {
        //TODO: Update Element logic
        return;
      }
      try {
        this.newElement.id = uuidv4();
        this.addElement(this.newElement);
        this.clear();
        //TODO: Notifications logic
      } catch (error) {
        console.log(error);
      }
    },
    clear() {
      this.newElement.year = "";
      this.newElement.title = "";
      this.newElement.description = "";
      this.$refs.observer.reset();
    },
  },
  computed: {
    years: () => {
      return generateArrayOfYears();
    },
  },
  beforeUpdate: () => {
    if (this.props.element) {
      this.newElement = this.props.element;
    }
  },
};
</script>

<style></style>
