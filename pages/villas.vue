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
  title: "Our Villas",
  text: `<p
          class="font-serif text-sm md:text-md line leading-7 md:leading-9 mx-4 tracking-wide"
        >
         Your stay in Bali will feel even more convenient with our fully furnished kitchens and private swimming pools that come standard in each of our villas.
        </p>
        `,
  imageSrc: "/images/art/villa-art_1_md.jpeg",
};

export default {
  components: {
    VillaDetail,
    AutoCarousel,
    OurServices,
  },
  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "At Danoya we have a wide selection of villas fit for every type of guest. There are two primary categories of villas: Imperial and Royal",
        },
      ],
    });
    return {
      infoSectionText,
    };
  },
};
</script>

<style></style>
