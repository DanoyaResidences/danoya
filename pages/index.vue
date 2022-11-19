<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <!-- <TopParallax
      heading="Home starts here"
      subHeading="Convenience at your fingertips"
      imagePath="/images/headers/home_parallax.jpeg"
    /> -->
    <video-parallax
      heading="Home starts here"
      subHeading="Convenience at your fingertips"
      videoPath=""
    />
    <info-section :content="infoSectionText" />
    <!-- <villa-carousel /> -->
    <fade-carousel />
    <text-and-gallery :content="textAndGalleryText" />
    <info-section :content="ourLocationText" />
    <Footer />
  </div>
</template>

<script>
import TextAndGallery from "../components/Sections/TextAndGallery.vue";
import FadeCarousel from "../components/Sections/FadeCarousel.vue";
import VideoParallax from "../components/VideoParallax.vue";

// Text data
const infoSectionText = {
  title: "The title",
  text: `<p
          class="md:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-widest"
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

const ourLocationText = {
  title: "Our location",
  text: `<p
          class="md:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-widest"
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

const textAndGalleryText = {
  title: `The Title`,
  gallery: [
    {
      src: "images/spirit/spirit_1_web.jpeg",
      alt: "",
    },
    {
      src: "images/spirit/spirit_2_web.jpeg",
      alt: "",
    },
    {
      src: "images/spirit/spirit_3_web.jpeg",
      alt: "",
    },
  ],
  topText: `<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro.
        </p>
        <br />
        <NuxtLink
          class="font-serif tracking-wider link-secondary transition-all duration-300 hover:ml-4 underline hover:link-primary"
          to="/about"
          >Learn More</NuxtLink
        >`,
  bottomText: `<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
  bottomImage: "images/villas/Grand_Imperial/carousel/GI1_web.jpeg",
};

export default {
  components: {
    TextAndGallery,
    FadeCarousel,
    VideoParallax,
  },
  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Danoya Private Luxury residences are a villa complex located in Seminyak, Bali.  Situated in between the bustling areas of Seminyak and Canggu/Berawa",
        },
      ],
    });
    return {
      infoSectionText,
      ourLocationText,
      textAndGalleryText,
    };
  },
};
</script>

<style></style>
