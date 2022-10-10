<template>
  <nav-bar-top />
  <nav-bar-bottom />
  <TopParallax
    heading="Home starts here"
    subHeading="Convenience at your fingertips"
    imagePath="/images/headers/home_parallax.jpeg"
  />
  <info-section :content="infoSectionText" />
  <villa-carousel />
  <text-and-gallery />
  <Footer />
</template>

<script>
import TextAndGallery from "../components/Sections/TextAndGallery.vue";

const infoSectionText = {
  title: "The title",
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
  imageSrc: "/images/art/villa-art_2_md.jpeg",
};

export default {
  components: {
    TextAndGallery,
  },
  setup() {
    return {
      infoSectionText,
    };
  },
};
</script>

<style></style>
