<template>
  <div>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(element, index) in orderedElementsByYear"
        :key="index"
        :color="element.color"
        fill-dot
        large
      >
        <template v-if="!$vuetify.breakpoint.smAndDown" v-slot:opposite>
          <span
            class="headline font-weight-bold"
            :style="{ color: element.color }"
            v-text="element.year"
          ></span>
        </template>
        <template>
          <v-card
            :color="element.color"
            dark
            max-width="550"
            :class="[
              $vuetify.breakpoint.mdAndUp && isEvenNumber(index)
                ? 'timeline__item--right'
                : '',
            ]"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">{{ element.title }}</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{ element.description }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <span
                  v-if="$vuetify.breakpoint.smAndDown"
                  class="text-h4 font-weight-light"
                  >{{ element.year }}
                </span>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1"> mdi-trash-can </v-icon>
                  <v-icon class="mr-1" @click="updateElement(element)">
                    mdi-pencil
                  </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </template>
      </v-timeline-item>
    </v-timeline>
    <timeline-element-update-dialog
      v-if="openDialog"
      :element="elementToUpdate"
      :openDialog="openDialog"
    />
  </div>
</template>

<script>
import TimelineElementUpdateDialog from "./TimelineElementUpdateDialog.vue";

import { mapGetters } from "vuex";

export default {
  components: { TimelineElementUpdateDialog },
  name: "TimelineElementsList",
  data: () => ({
    elementToUpdate: null,
    openDialog: false,
  }),
  methods: {
    isEvenNumber(num) {
      return num % 2 !== 0;
    },
    updateElement(element) {
      this.elementToUpdate = { ...element };
      this.openDialog = true;
    },
    closeDialog() {
      this.openDialog = false;
    },
  },
  computed: {
    ...mapGetters({
      orderedElementsByYear: "getOrderedElementByYear",
    }),
  },
};
</script>

<style scoped>
.timeline__item--left {
  margin-right: auto;
}
.timeline__item--right {
  margin-left: auto;
}
</style>
