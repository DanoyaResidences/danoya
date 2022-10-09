<template>
  <nav-bar-top />
  <nav-bar-bottom />
  <TopParallax
    heading="Our villas"
    subHeading="A selection for every type of traveller"
    imagePath="images/headers/villas_parallax.jpeg"
  />
  <villa-detail />
  <Footer />
</template>

<script>
import VillaDetail from "../components/Sections/VillaDetail.vue";
import AutoCarousel from "../components/widgets/AutoCarousel.vue";

export default {
  components: {
    VillaDetail,
    AutoCarousel,
  },
};
</script>

<style></style>
