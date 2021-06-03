<template>
  <div>
    <landing-page />
    <steps-page />
    <timeline-page />
  </div>
</template>

<script>
import LandingPage from "../layouts/LandingPage.vue";
import StepsPage from "../layouts/StepsPage.vue";
import TimelinePage from "../layouts/TimelinePage.vue";

export default {
  name: "Home",

  components: {
    LandingPage,
    StepsPage,
    TimelinePage,
  },
};
</script>
