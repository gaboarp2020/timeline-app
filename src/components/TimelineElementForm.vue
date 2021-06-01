<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <v-card max-width="700" style="margin: 4rem auto">
        <v-card-text class="d-flex flex-column" style="padding: 2rem">
          <validation-provider v-slot="{ errors }" name="Year" rules="required">
            <v-select
              v-model="newElement.year"
              :items="years"
              :error-messages="errors"
              label="Year"
              required
            ></v-select>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Title"
            rules="required|max:32|min:4"
            :bails="false"
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

          <span
            class="timeline-element-form__label--grey"
            style="margin: 20px 0"
            >Color</span
          >
          <div class="d-flex justify-center">
            <v-color-picker
              v-model="newElement.color"
              dot-size="25"
              elevation="2"
              mode="hexa"
              swatches-max-height="200"
            ></v-color-picker>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-end" style="padding: 24px">
          <v-btn
            class="mr-4"
            color="primary"
            large
            type="submit"
            :disabled="invalid"
            :loading="isLoading"
          >
            submit
          </v-btn>
          <v-btn @click="clear" elevation="2" medium> clear </v-btn>
        </v-card-actions>
      </v-card>
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
    isLoading: false,
    newElement: {
      id: "",
      year: "",
      title: "",
      description: "",
      color: "#70E4E4",
    },
  }),

  methods: {
    submit() {
      const isInvalid = !this.$refs.observer.validate();

      if (isInvalid) {
        return;
      }

      this.isLoading = true;

      if (this.props && this.props.element) {
        //TODO: Update Element logic
        return;
      }

      try {
        this.newElement.id = uuidv4();
        const payload = { ...this.newElement };
        this.addElement(payload);
        //TODO: Notifications logic
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
        this.clear();
      }
    },
    clear() {
      this.newElement.year = "";
      this.newElement.title = "";
      this.newElement.description = "";
      this.newElement.color = "#70E4E4";
      this.$refs.observer.reset();
    },
    ...mapActions({
      addElement: "addElementAction",
      incrementUnseenNotifitacionsCount:
        "incrementUnseenNotifitacionsCountActions",
    }),
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

<style lang="scss" scoped>
.timeline-element-form__label--grey {
  color: rgba(0, 0, 0, 0.6);
}
</style>
