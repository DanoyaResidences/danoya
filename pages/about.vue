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
  title: "Our History",
  text: `<p
          class="md:text-base text-sm line leading-7 md:leading-9 mx-4 tracking-widest"
        >
          Danoya Private Luxury Residences was founded in 2003 with the goal of providing guests with the ultimate in relaxation and luxury.  We started small, with just two separate villa units, one with three bedrooms and the other with two.
        </p>
        <p
          class="md:text-base text-sm line leading-7 md:leading-9 mx-4 tracking-widest"
        >
         We were determined to grow both in size and in quality, and in 2009 we accomplished this with the construction of seven additional new villa units.
        </p>
        <span class="mt-8 ml-4">- Danoya's History</span>`,
  imageSrc: "/images/about/About_top.jpeg",
};

const textAndGalleryText = {
  title: ``,
  gallery: [
    {
      src: "images/about/Slide_1.jpeg",
      alt: "",
    },
    {
      src: "images/about/Slide_2.jpeg",
      alt: "",
    },
    {
      src: "images/about/Slide_3.jpeg",
      alt: "",
    },
  ],
  topText: `<p class="lg:text-lg md:text-md text-sm leading-7 mx-auto tracking-widest">
          In 2011, we added 13 new villas to our selection, bringing the total number of units to 20.  These new villas were designed with the same attention to detail and commitment to quality that have made Danoya a trusted choice for vacationers from around the world.  
        </p>
       `,
  bottomText: `<p class="lg:text-lg md:text-md text-sm leading-7 mx-4 tracking-widest">
          Today, we are proud to offer a wide range of luxurious and well-appointed villas, each of which is equipped with a range of amenities and features to ensure that you have everything you need for a comfortable and enjoyable stay.
        </p>
        <br />
        <p class="lg:text-lg md:text-md text-sm leading-7 mx-4 tracking-widest">
          Whether you're looking for a romantic getaway, a family vacation, or a trip with a group of friends, Danoya has a villa that is sure to meet your needs and exceed your expectations.
        </p>
        <p class="lg:text-lg md:text-md text-sm leading-7 mx-4 tracking-widest">
          Come and experience the ultimate in relaxation and luxury at Danoya Private Luxury Residences.
        </p>`,
  bottomImage: "images/spirit/Spirit_1_web.jpeg",
};

const ourTeamContent = {
  title: "Our Team",
  introText: `<p class="lg:text-lg md:text-base text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          Our hotel team is dedicated to providing exceptional service to every guest that walks through our doors. 
        </p>
        <p class="lg:text-lg md:text-base text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          From the front desk to housekeeping, every team member is committed to going above and beyond to ensure that our guests have a comfortable and memorable stay. Their attention to detail and warm approach make our hotel stand out as a top choice for travelers.
        </p>
        `,
  team: [
    {
      name: "Calvin Santoso",
      role: "Resident Manager",
      imageSrc: "images/spirit/spirit_1_web.jpeg",
      text: `<p class="lg:text-lg md:text-base text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
    },
    {
      name: "Ni Wayan Puryani",
      role: "Accounting Director",
      imageSrc: "images/spirit/spirit_1_web.jpeg",
      text: `<p class="lg:text-lg md:text-base text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
    },
    {
      name: "Oka Pramana",
      role: "House Keeping Supervisor",
      imageSrc: "images/spirit/spirit_1_web.jpeg",
      text: `<p class="lg:text-lg md:text-base text-sm leading-7 md:leading-9 mx-4 tracking-widest">
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
