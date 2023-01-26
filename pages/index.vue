<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <video-parallax
      heading="Home starts here"
      subHeading="Welcome to Danoya Private Luxury Residences"
      videoPath=""
    />
    <info-section :content="infoSectionText" />
    <carousel />
    <text-and-gallery :content="textAndGalleryText" />
    <location-section :content="ourLocationText" />
    <Footer />
  </div>
</template>

<script>
import TextAndGallery from "../components/Sections/TextAndGallery.vue";
import FadeCarousel from "../components/Sections/FadeCarousel.vue";
import VideoParallax from "../components/VideoParallax.vue";
import Carousel from "../components/Sections/Carousel.vue";

// Text data
const infoSectionText = {
  title: "Welcome to Danoya",
  text: `<p
          class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider"
        >
          Welcome to Danoya Residences, a luxurious
private villa complex located in the heart of
beautiful Bali. Nestled in the charming village of
Batu Belig, our opulent and roomy
accommodations provide guests with the
ultimate in relaxation and luxury. 
        </p>
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
We are here to
provide you with the ideal stay, ensuring that
you can make the most of your time in Bali,
whether you're traveling solo, with family, or
friends.
        </p>
        `,
  imageSrc: "/images/home/Welcome.jpeg",
  imageAlt: "Danoya entrance at night",
};

const ourLocationText = {
  title: "Our Location",
  text: `<p
          class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider"
        >
          Danoya Private Luxury Residences offers a luxurious retreat in the bustling neighborhood of Seminyak, Bali. Located just steps away from picturesque beaches and a short drive to popular beach clubs and the Seminyak Shopping Centre.</p> 
          <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">Our villas provide the ideal location for exploring the vibrant entertainment districts of both Seminyak and Canggu, making it the perfect base for your tropical paradise getaway.
        </p>
        `,
};

const textAndGalleryText = {
  title: `Home Away From Home`,
  gallery: [
    {
      src: "images/spirit/Spirit_1_web.jpeg",
      alt: "Danoya Walkway",
    },
    {
      src: "images/spirit/Spirit_2_web.jpeg",
      alt: "Danoya entrance area",
    },
    {
      src: "images/spirit/Spirit_3_web.jpeg",
      alt: "Danoya Concierge / Lobby",
    },
  ],
  topText: `
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
        Experience the best of the best at our luxurious villa complex, featuring a seamless blend of Mediterranean and tropical design with a nod to traditional Balinese aesthetics.
        </p>
  <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider md:mb-8">
          Our 20 beautifully designed villas offer open floor plans, enclosed lounge area, fully equipped kitchens, and private pools, providing you with everything you need for a comfortable and enjoyable stay.
        </p>
        `,
  bottomText: `<p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
          Our wealth of experience of over 15 years and dedication to excellence have made us a trusted choice for vacationers from around the world, and we take pride in offering our guests the highest level of convenience and relaxation at their home away from home.
        </p>
        `,
  bottomImage: {
    src: "images/villas/Grand_Imperial/carousel/GI1_web.jpeg",
    alt: "Grand Imperial 3 dining area",
  },
};

export default {
  components: {
    TextAndGallery,
    FadeCarousel,
    VideoParallax,
    Carousel,
  },
  setup() {
    useHead({
      meta: [
        {
          hid: "description",
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
