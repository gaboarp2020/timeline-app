<template>
  <div class="landingpage__hero">
    <v-container class="mt-14">
      <v-row class="d-flex justify-center ma-auto" style="max-width: 800px">
        <v-col cols="12">
          <v-card elevation="0" max-width="500">
            <v-card-title class="landingpage__title mb-3"
              >TIMELINE</v-card-title
            >
            <v-card-subtitle class="landingpage__subtitle mb-3"
              >APP</v-card-subtitle
            >
            <v-card-text class="landingpage__text ml-2">
              A timeline application where you can add, edit and delete items
              that are displayed in chronological order
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <a href="#steps-page">
            <v-btn class="ml-3">Get started</v-btn>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <img class="landingpage__surfer" height="" src="../assets/surfer.png" />
    <svg
      class="landingpage__wave"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      width="1280"
      height="247"
      preserveAspectRatio="none"
      viewBox="0 0 1280 247"
    >
      <g mask='url("#SvgjsMask1827")' fill="none">
        <path
          d="M 0,148 C 85.4,128.2 256.2,30.2 427,49 C 597.8,67.8 683.4,250.4 854,242 C 1024.6,233.6 1194.8,54 1280,7L1280 247L0 247z"
          fill="rgba(56, 123, 185, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1827">
          <rect width="1280" height="247" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
    <svg
      class="landingpage__wave"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      width="1280"
      height="185"
      preserveAspectRatio="none"
      viewBox="0 0 1280 185"
    >
      <g mask='url("#SvgjsMask1896")' fill="none">
        <path
          d="M 0,111 C 64,98 192,34.6 320,46 C 448,57.4 512,161.8 640,168 C 768,174.2 832,81.6 960,77 C 1088,72.4 1216,131.4 1280,145L1280 185L0 185z"
          fill="rgba(67, 149, 225, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1896">
          <rect width="1280" height="185" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

.landingpage__hero {
  height: 700px;
  position: relative;
}
.landingpage__wave {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.landingpage__title {
  color: #4876a1;
  font-size: 3.8rem;
  line-height: 4rem;
  letter-spacing: -0.03em;
  font-weight: 800;
  font-family: Ubuntu;
}
.landingpage__subtitle {
  color: #4c7aa5;
  font-size: 2.8rem;
  line-height: 3rem;
  letter-spacing: -0.03em;
  font-weight: 800;
  font-family: Ubuntu;
}
.landingpage__text {
  color: #8ba3b9;
  font-size: 1.8rem;
  line-height: 2rem;
  font-family: Ubuntu;
}
.landingpage__surfer {
  position: absolute;
  right: 10px;
  z-index: 1;
}
</style>
