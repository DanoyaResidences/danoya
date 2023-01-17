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
          class="lg:text-lg md:text-md text-sm leading-7 mx-auto tracking-widest"
        >
          Welcome to Danoya Residences, a luxurious
private villa complex located in the heart of
beautiful Bali. Nestled in the charming village of
Batu Belig, our opulent and roomy
accommodations provide guests with the
ultimate in relaxation and luxury. We are here to
provide you with the ideal stay, ensuring that
you can make the most of your time in Bali,
whether you're traveling solo, with family, or with
friends.
        </p>`,
  imageSrc: "/images/home/Welcome.jpeg",
};

const ourLocationText = {
  title: "Our location",
  text: `<p
          class="lg:text-lg md:text-md text-sm leading-7 mx-auto tracking-widest"
        >
          Danoya Private Luxury Residences is located in a prime location,
within short driving distance of some of Bali's most popular
attractions. Our villas are just a short drive from Kuta Beach,
Canggu, and the Seminyak Shopping Centre, making it easy for
guests to get around and explore all that the area has to offer.
        </p>
        `,
  imageSrc: "/images/our-villas/Our_villas_header.jpeg",
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
  topText: `
        <p class="lg:text-lg md:text-md text-sm leading-7 mx-auto tracking-widest">
        Experience the best of the best at our luxurious villa complex, featuring a seamless blend of Mediterranean and tropical design with a nod to traditional Balinese aesthetics.
        </p>
  <p class="lg:text-lg md:text-md text-sm leading-7 mx-auto tracking-widest">
          Our 20 beautifully designed villas offer open floor plans, enclosed lounge area, fully equipped kitchens, and private pools, providing you with everything you need for a comfortable and enjoyable stay.
        </p>
        `,
  bottomText: `<p class="lg:text-lg md:text-md text-sm leading-7 mx-auto tracking-widest">
          Our wealth of experience of over 15 years and dedication to excellence have made us a trusted choice for vacationers from around the world, and we take pride in offering our guests the highest level of convenience and relaxation at their home away from home.
        </p>
        `,
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
