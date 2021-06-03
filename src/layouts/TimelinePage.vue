<template>
  <div class="py-16">
    <timeline-element-form-add />
    <timeline-elements-list />
  </div>
</template>

<script>
import TimelineElementFormAdd from "../components/TimelineElementFormAdd.vue";
import TimelineElementsList from "../components/TimelineElementsList.vue";

export default {
  components: {
    TimelineElementFormAdd,
    TimelineElementsList,
  },
  name: "TimelinePage",
};
</script>

<style></style>
