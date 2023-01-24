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
          class="font-serif text-sm md:text-base line leading-2 md:leading-2 tracking-wide"
        >
         Escape to paradise and enjoy a relaxing vacation with
our fully furnished villas in Bali. Our villas are designed with your comfort in mind, featuring a range of amenities that are sure to make your stay as enjoyable and stress-free as possible.
        </p>
        <p
        class="font-serif text-sm md:text-base line leading-2 md:leading-2 tracking-wide">
        Our villas come equipped with fully furnished kitchens and private pools for a convenient vacation experience. We provide all the necessary amenities for culinary delights and unwinding, making our villas the perfect choice for a memorable stay.
        </p>
        `,
  imageSrc: "/images/our-villas/Our_villas_header.jpeg",
  imageAlt: "Royal 5 Living area",
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
          hid: "description",
          name: "description",
          content:
            "At Danoya we have a wide selection of villas fit for every type of guest. Our villas come in two categories: Imperial and Royal",
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
