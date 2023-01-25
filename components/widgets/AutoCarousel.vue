<template>
  <Swiper
    class="h-[80vh]"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in carouselImages" :key="slide">
      <img :src="slide.src" class="block w-full" :alt="slide.alt" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
const carouselImages = [
  {
    alt: "Grand Imperial living area",
    src: "/images/villas/Grand_Imperial/carousel/GI9_web.jpeg",
  },
  {
    alt: "Royal 5-bedroom living area",
    src: "/images/villas/Royal_5/carousel/Royal5_1_web.jpeg",
  },
  {
    alt: "Imperial 1 Honeymoon",
    src: "/images/villas/Imperial_1/carousel/Imp1_5_web.jpeg",
  },
];
export default {
  props: ["images"],
  setup() {
    return {
      carouselImages,
    };
  },
};
</script>

<style></style>
