<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <TopParallax
      heading="Our villas"
      subHeading="A selection for every type of traveller"
      imagePath="images/headers/villas_parallax.jpeg"
    />
    <info-section :content="infoSectionText" />
    <villa-detail />
    <our-services />
    <Footer />
  </div>
</template>

<script>
import OurServices from "../components/Sections/OurServices.vue";
import VillaDetail from "../components/Sections/VillaDetail.vue";
import AutoCarousel from "../components/widgets/AutoCarousel.vue";

const infoSectionText = {
  title: "Villa title",
  text: `<p
          class="font-serif text-sm md:text-md line leading-7 md:leading-9 mx-4 tracking-wide"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          sapiente sit, excepturi iste ullam aspernatur fugit deserunt voluptas
          itaque quidem. Tenetur quo, iusto laudantium molestiae animi odio
          quasi molestias odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet eos quaerat maiores ipsa aliquid sequi
          asperiores at illo corporis numquam. Ad saepe voluptatibus aut a porro
          veritatis dolorem quo rem.
        </p>
        <span class="mt-8 ml-4">- Danoya's History</span>`,
  imageSrc: "/images/art/villa-art_1_md.jpeg",
};

export default {
  components: {
    VillaDetail,
    AutoCarousel,
    OurServices,
  },
  setup() {
    return {
      infoSectionText,
    };
  },
};
</script>

<style></style>
