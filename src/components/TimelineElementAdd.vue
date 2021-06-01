<template>
  <v-expansion-panels
    v-model="activeItemsInPanel"
    :style="{ maxWidth: '900px', margin: 'auto' }"
  >
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-h6 font-weight-light">
          Add a new Timeline Element
        </span>
        <template v-slot:actions>
          <v-btn color="white" class="text--primary" fab small>
            <v-icon v-show="!panelIsActive">mdi-plus</v-icon>
            <v-icon v-show="panelIsActive">mdi-minus</v-icon>
          </v-btn>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <timeline-element-form />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import TimelineElementForm from "../components/TimelineElementForm.vue";

export default {
  components: { TimelineElementForm },
  name: "TimelineElementAdd",
  data: () => ({
    activeItemsInPanel: undefined,
  }),
  computed: {
    panelIsActive() {
      return this.activeItemsInPanel !== undefined;
    },
  },
};
</script>

<style></style>
