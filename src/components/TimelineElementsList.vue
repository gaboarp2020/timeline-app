<template>
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
          :class="isOddNumber(index) ? '' : 'timeline__item--left'"
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
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  name: "TimelineElementsList",
  data: () => ({}),
  methods: {
    isOddNumber(numer) {
      return numer % 2 === 0;
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
  margin-left: auto;
}
</style>
