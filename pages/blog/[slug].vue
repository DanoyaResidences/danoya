<template>
  <nav-bar-top />
  <nav-bar-bottom />
  <TopParallax
    heading="Specific Blog"
    :subHeading="`Blog with ID: ${slug}`"
    imagePath="/images/headers/home_parallax.jpeg"
  />

  <Footer />
</template>

<script>
export default {
  components: {},
  async setup() {
    // Init strapi
    const { findOne } = useStrapi();
    // Extract route params
    const route = useRoute();
    const slug = route.params.slug;

    // console.log("find: ", find("products"));
    try {
      const response = await findOne("slugify/slugs/article", slug);
      console.log("response.data: ", response.data);
    } catch (error) {
      console.log("error with API call: ", error);
    }

    return {
      slug,
    };
  },
};
</script>

<style></style>
