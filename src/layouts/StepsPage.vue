<template>
  <div>
    <div class="stepspage__hero">
      <div class="stepspage__stepper--container d-flex">
        <the-stepper class="ma-auto"></the-stepper>
      </div>
    </div>
    <div class="stepspage__gradient"></div>
    <svg
      class="stepspage__wave"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      width="1280"
      height="185"
      preserveAspectRatio="none"
      viewBox="0 0 1280 185"
    >
      <g mask='url("#SvgjsMask1950")' fill="none">
        <rect
          width="1280"
          height="185"
          x="0"
          y="0"
          fill="rgba(104, 165, 222, 1)"
        ></rect>
        <path
          d="M 0,88 C 51.2,76.8 153.6,32.4 256,32 C 358.4,31.6 409.6,88.2 512,86 C 614.4,83.8 665.6,24.4 768,21 C 870.4,17.6 921.6,73.4 1024,69 C 1126.4,64.6 1228.8,13 1280,-1L1280 185L0 185z"
          fill="rgba(67, 149, 225, 1)"
        ></path>
        <path
          d="M 0,120 C 64,131.8 192,181.6 320,179 C 448,176.4 512,106 640,107 C 768,108 832,187 960,184 C 1088,181 1216,110.4 1280,92L1280 185L0 185z"
          fill="rgba(255, 255, 255, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1950">
          <rect width="1280" height="185" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  </div>
</template>

<script>
import TheStepper from "../components/TheStepper.vue";
export default {
  components: {
    TheStepper,
  },
  name: "StepsPage",
};
</script>

<style lang="scss" scoped>
.stepspage__hero {
  position: relative;
  height: 200px;
  background-color: #4395e1;
}
.stepspage__gradient {
  height: 400px;
  background-image: linear-gradient(#4395e1, #68a5de);
  position: relative;
}
.stepspage__wave {
  width: 100%;
  display: block;
}
.stepspage__stepper--container {
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 5rem;
}
</style>
