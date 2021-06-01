<template>
  <main>
    <timeline-element-add />
    <timeline-elements-list />
  </main>
</template>

<script>
import TimelineElementAdd from "../components/TimelineElementAdd.vue";
import TimelineElementsList from "../components/TimelineElementsList.vue";

export default {
  name: "Home",

  components: {
    TimelineElementAdd,
    TimelineElementsList,
  },
};
</script>
