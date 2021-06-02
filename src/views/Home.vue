<template>
  <main>
    <timeline-element-form-add />
    <timeline-elements-list />
  </main>
</template>

<script>
import TimelineElementFormAdd from "../components/TimelineElementFormAdd.vue";
import TimelineElementsList from "../components/TimelineElementsList.vue";

export default {
  name: "Home",

  components: {
    TimelineElementFormAdd,
    TimelineElementsList,
  },
};
</script>
