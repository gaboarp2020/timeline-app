<template>
  <div>
    <section id="landing-page">
      <landing-page />
    </section>
    <section id="steps-page">
      <steps-page />
    </section>
    <section id="timeline-page">
      <timeline-page />
    </section>
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
