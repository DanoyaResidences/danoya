<template>
  <nav-bar-top />
  <nav-bar-bottom />
  <TopParallax
    heading="Our villas"
    subHeading="A selection for every type of traveller"
  />
  <villa-detail />
  <Footer />
</template>

<script>
import VillaDetail from "../components/Sections/VillaDetail.vue";
export default {
  components: {
    VillaDetail,
  },
};
</script>

<style></style>
