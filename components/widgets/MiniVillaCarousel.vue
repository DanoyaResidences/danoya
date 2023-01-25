<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :allowTouchMove="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
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
    <SwiperSlide v-for="slide in images" :key="slide">
      <img :src="slide.src" class="block w-full h-[370px]" :alt="slide.alt" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
export default {
  props: ["images"],
  setup() {
    return {};
  },
};
</script>

<style></style>
