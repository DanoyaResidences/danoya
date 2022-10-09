<template>
  <nav-bar-top />
  <nav-bar-bottom />
  <TopParallax
    heading="Home starts here"
    subHeading="Convenience at your fingertips"
    imagePath="/images/headers/home_parallax.jpeg"
  />
  <info-section />
  <villa-carousel />
  <text-and-gallery />
  <Footer />
</template>

<script>
import TextAndGallery from "../components/Sections/TextAndGallery.vue";

export default {
  components: {
    TextAndGallery,
  },
  setup() {},
};
</script>

<style></style>
