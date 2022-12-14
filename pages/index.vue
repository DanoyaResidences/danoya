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
      subHeading="Welcome to Danoya Private Luxury Residences"
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
  title: "Welcome to Danoya",
  text: `<p
          class="md:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-widest"
        >
          Danoya Residences is a luxurious private villa complex in Bali that features opulent and roomy accommodations nestled in Batu Belig.  We are here to provide you with the ideal stay so that you can make the most of your time in Bali, whether you're traveling solo or with family and friends.
        </p>`,
  imageSrc: "/images/art/villa-art_2_md.jpeg",
};

const ourLocationText = {
  title: "Our location",
  text: `<p
          class="md:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-widest"
        >
          Danoya Private Luxury Residences' prime location is within short driving distance of popular attractions like Kuta Beach, Canggu, and Seminyak Shopping Centre. Guests will have ease getting around with plenty of time to explore.
        </p>
        `,
  imageSrc: "/images/art/villa-art_2_md.jpeg",
};

const textAndGalleryText = {
  title: `Home Away From Home`,
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
  topText: `<p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest md:mb-10">
          Our 20 luxurious villas are a seamless blend of Mediterranean and tropical design with a nod to traditional Balinese aesthetics and beautifully designed open floor plans and enclosed living area, all come complete with kitchens and private pools.
        </p>
        `,
  bottomText: `<p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          With experience spanning more than 15 years, we take pride in giving you an unforgettable experience. Providing you with convenience and relaxation...
        </p>
        <br />
        <p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
         We are truly your home away from home.
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
            "Danoya Private Luxury residences is a villa complex located in Seminyak, Bali.  Situated in between the bustling areas of Seminyak and Canggu/Berawa",
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
