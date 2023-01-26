<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <TopParallax
      heading="About"
      subHeading="A brief history..."
      imagePath="/images/headers/about_parallax.jpeg"
    />
    <info-section :content="topSectionText" />
    <text-and-gallery :content="textAndGalleryText" />
    <image-between-text :content="ourTeamContent" />
    <Footer />
  </div>
</template>

<script>
import TextAndGallery from "../components/Sections/TextAndGallery.vue";
import ImageBetweenText from "../components/Sections/ImageBetweenText.vue";

const topSectionText = {
  title: "The Heart of Bali",
  text: `<p
          class="lg:text-base sm:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-wider"
        >
          Seminyak is a neighborhood located in the heart of Bali, Indonesia. It is known for its high-end resorts, designer boutiques, and world-class restaurants. Visitors can indulge in a wide range of activities, from shopping to dining at some of the best restaurants in the world, and relaxing on the picturesque beaches.
        </p>
        <p
          class="lg:text-base sm:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-wider"
        >
         Seminyak is also home to a vibrant nightlife scene, from beachside bars and rooftop lounges, to intimate jazz clubs, and high-energy dance clubs, Seminyak offers something for everyone looking to enjoy a night out. Seminyak is the perfect place for those looking for an extravagant and memorable holiday experience in Bali.
        </p>
        `,
  imageSrc: "/images/about/About_top.jpeg",
  imageAlt: "Danoya's picturesque walkway during sunset",
};

const textAndGalleryText = {
  title: `Our Story`,
  gallery: [
    {
      src: "images/about/Slide_1.jpeg",
      alt: "Danoya's green walkway",
    },
    {
      src: "images/about/Slide_2.jpeg",
      alt: "Royal 2 Living",
    },
    {
      src: "images/about/Slide_3.jpeg",
      alt: "Royal 2 bedroom",
    },
  ],
  topText: `<p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
          Danoya Private Luxury Residences, established in 2003, strives to offer guests an unparalleled experience of leisure and indulgence. We began modestly, with two villa units - one boasting three bedrooms and the other featuring two.
        </p>
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider md:mb-10">
          We were determined to grow both in size and in quality, and in 2009 we accomplished this with the construction of seven additional new villa units.
        </p>
       `,
  bottomText: `
  <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider">
          In 2011, we added 13 new villas to our selection, bringing the total number of units to 20.  These new villas were designed with the same attention to detail and commitment to quality that have made Danoya a trusted choice for vacationers from around the world.  
        </p>
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-auto tracking-wider md:mb-10">
          Today, we are proud to offer a wide range of luxurious and well-appointed villas, each of which is equipped with a range of amenities and features to ensure that you have everything you need for a comfortable and enjoyable stay.
        </p>
       `,
  bottomImage: {
    src: "images/spirit/Spirit_1_web.jpeg",
    alt: "Danoya villa entrance with sign",
  },
};

const ourTeamContent = {
  title: "Our Team",
  introText: `<p class="lg:text-base sm:text-sm text-xs leading-7 mx-4 tracking-wider">
          Our hotel team is dedicated to providing exceptional service to every guest that walks through our doors. 
        </p>
        <p class="lg:text-base sm:text-sm text-xs leading-7 mx-4 tracking-wider">
          From the front desk to housekeeping, every team member is committed to going above and beyond to ensure that our guests have a comfortable and memorable stay. Their attention to detail and warm approach make our hotel stand out as a top choice for travelers.
        </p>
        `,
  team: [
    {
      name: "Calvin Santoso",
      role: "Resident Manager",
      alt: "Profile photo of Calvin Santoso",
      imageSrc: "/images/spirit/Spirit_2_web.jpeg",
      text: `<p class="lg:text-base sm:text-sm text-xs leading-7 mx-4 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
    },
    {
      name: "Ni Wayan Puryani",
      role: "Accounting Director",
      alt: "Profile photo of Ni Wayan Puryani",
      imageSrc: "/images/spirit/Spirit_2_web.jpeg",
      text: `<p class="lg:text-base sm:text-sm text-xs leading-7 mx-4 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
    },
    {
      name: "Oka Pramana",
      role: "House Keeping Supervisor",
      alt: "Profile photo of Oka Pramana",
      imageSrc: "/images/spirit/Spirit_2_web.jpeg",
      text: `<p class="lg:text-base sm:text-sm text-xs leading-7 mx-4 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
    },
  ],
};
export default {
  components: {
    TextAndGallery,
    ImageBetweenText,
  },

  setup() {
    useHead({
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Danoya about us and our history.",
        },
      ],
    });
    return {
      topSectionText,
      textAndGalleryText,
      ourTeamContent,
    };
  },
};
</script>

<style></style>
