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
          class="md:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-widest"
        >
          Danoya Private Luxury Residences was built in 2003 and initially consisted of just two separate villa units, one with three bedrooms and the other with two.  
        </p>
        <p
          class="md:text-sm text-xs line leading-7 md:leading-9 mx-4 tracking-widest"
        >
          Our goal was to grow both in size and in quality and we accomplished this in 2009 with the construction of seven additional new villa units.
        </p>
        <span class="mt-8 ml-4">- Danoya's History</span>`,
  imageSrc: "/images/art/villa-art_2_md.jpeg",
};

const textAndGalleryText = {
  title: ``,
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
  topText: `<p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          Danoya continued to grow in 2011 and added 13 more villas, bringing the total number of units to 20.  
        </p>
        <br />
        <p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest md:mb-10">
        Our villas are split into two types:
        </p>
       `,
  bottomText: `<p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          This premium selection, which features luxurious bedrooms and bathrooms, gives you plenty of room to stretch out and unwind after a long day of adventure.
        </p>
        <br />
        <p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          This style of villa is exceptionally crafted with a modern and minimalistic aesthetic laid out over two levels.  It offers you and your loved ones the utmost comfort, making it an excellent choice for trips with your family.
        </p>`,
  bottomImage: "images/villas/Grand_Imperial/carousel/GI1_web.jpeg",
};

const ourTeamContent = {
  title: "Our Team",
  introText: `<p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          Our team is the secret to our success.
        </p>
        <p class="lg:text-lg md:text-md text-sm leading-7 md:leading-9 mx-4 tracking-widest">
          Each member of our staff adds to the diversity of Danoya's composition, enriching the guest experience during their stay.
        </p>
        `,
  team: [
    {
      name: "Calvin Santoso",
      role: "Resident Manager",
      imageSrc: "images/spirit/spirit_1_web.jpeg",
      text: `<p >
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
      text: `<p>
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
      text: `<p>
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
