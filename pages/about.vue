<template>
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
</template>

<script>
import TextAndGallery from "../components/Sections/TextAndGallery.vue";
import ImageBetweenText from "../components/Sections/ImageBetweenText.vue";

const topSectionText = {
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
        <a
          class="font-serif tracking-wider link-secondary transition-all duration-300 hover:ml-4 underline hover:link-primary"
          href="/about"
          >Learn More</a
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

const ourTeamContent = {
  title: "Our Team",
  introText: `<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>`,
  team: [
    {
      name: "Calvin Santoso",
      role: "Resident Manager",
      imageSrc: "images/spirit/spirit_1_web.jpeg",
      text: `<p>
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
    return {
      topSectionText,
      textAndGalleryText,
      ourTeamContent,
    };
  },
};
</script>

<style></style>
