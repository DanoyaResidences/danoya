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
        Experience the epitome of luxury and style at our breathtaking villa complex, where the perfect blend of Mediterranean and tropical design seamlessly intertwine with traditional Balinese aesthetics to create a truly one-of-a-kind setting. Our 20 opulent villas boast open floor plans, enclosed lounge areas, fully equipped kitchens, and private pools, providing you with every modern convenience and comfort to ensure your stay is nothing short of extraordinary.
        </p>
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider sm:mb-10">
          With over 15 years of experience and a relentless dedication to excellence, we have cemented our reputation as a trusted and sought-after destination for discerning travelers from around the globe. We take great pride in offering our guests the highest level of convenience and relaxation, making our villa complex the ultimate home away from home.
        </p>
  
        `,
  bottomText: `
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
        Relax in the splendor of your own private oasis, each villa is designed and decorated to the highest standard, and our lush gardens and landscaping transport you to a world of serenity and tranquility. With our convenient location and wealth of amenities on site, you'll be spoilt for choice and entertained throughout your stay. And our dedicated concierge team is on hand 24/7 to attend to your every need, ensuring your stay with us is nothing short of extraordinary. 
        </p>
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
        Come indulge in the ultimate luxury getaway at our villa complex.
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
