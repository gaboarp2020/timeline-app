<template>
  <div>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <v-card max-width="700" style="margin: auto">
          <v-card-text class="d-flex flex-column" style="padding: 2rem">
            <validation-provider
              v-slot="{ errors }"
              name="Year"
              rules="required"
            >
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
                dot-size="5"
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
              {{ isUpdate ? "UPDATE" : "ADD" }}
            </v-btn>
            <v-btn @click="clear" elevation="2" medium> clear </v-btn>
            <slot></slot>
          </v-card-actions>
        </v-card>
      </form>
    </validation-observer>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Update </v-card-title>

        <v-card-text> Are you sure to update this element? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="update"> Yes </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ts-nocheck
import generateArrayOfYears from "./utils/generateArrayOfYears";

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
  name: "TimelineElementForm",
  props: {
    element: {
      type: Object,
      default: null,
    },
  },
  data: (props) => ({
    dialog: false,
    isLoading: false,
    isUpdate: false,
    newElement: {
      id: "",
      year: "",
      title: "",
      description: "",
      color: "#70E4E4",
    },
    elementToUpdate: props.element,
  }),

  methods: {
    clear() {
      this.newElement.year = "";
      this.newElement.title = "";
      this.newElement.description = "";
      this.newElement.color = "#70E4E4";
      this.$refs.observer.reset();
    },
    sendPayload(callback, payload) {
      this.isLoading = true;
      try {
        callback(payload);
        //TODO: Notifications logic
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    submit() {
      const isInvalid = !this.$refs.observer.validate();

      if (isInvalid) {
        return;
      }

      if (this.isUpdate) {
        this.dialog = true;

        return;
      }

      this.newElement.id = uuidv4();
      const payload = { ...this.newElement };

      this.sendPayload(this.addElement, payload);

      this.clear();
    },
    update() {
      const payload = { ...this.newElement };
      this.sendPayload(this.updateElement, payload);
      this.$emit("close");
    },
    ...mapActions({
      addElement: "addElementAction",
      updateElement: "updateElementAction",
      incrementUnseenNotifitacionsCount:
        "incrementUnseenNotifitacionsCountActions",
    }),
  },
  computed: {
    years: () => {
      return generateArrayOfYears();
    },
  },
  watch: {
    element: function (newVal) {
      this.newElement = newVal;
    },
  },
  created() {
    if (this.elementToUpdate) {
      this.newElement = this.elementToUpdate;
      this.isUpdate = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.timeline-element-form__label--grey {
  color: rgba(0, 0, 0, 0.6);
}
</style>
