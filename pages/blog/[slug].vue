<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <div class="h-56 bg-gray-500 -mt-56"></div>
    <blog-content :blog="blogArticle" :blogList="blogList" />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {},
  async setup() {
    // Init strapi
    const { findOne, find } = useStrapi();
    // Extract route params
    const route = useRoute();
    const slug = route.params.slug;
    let blogArticle = ref({});
    let blogList = ref([]);

    try {
      await retrieveBlogArticle();
      await retrieveBlogs();
    } catch (error) {
      console.error("error with API call: ", error);
    }

    async function retrieveBlogArticle() {
      const response = await findOne("slugify/slugs/article", slug, {
        // STRAPI request params
        populate: "*",
      });
      // Set as ref variable
      blogArticle.value = response.data.attributes;
    }

    // Makes an API call to retrieve blogs for current page
    async function retrieveBlogs() {
      const response = await find("articles", {
        // STRAPI request params
        sort: ["publishedAt:desc"],
        pagination: {
          pageSize: 20,
        },
      });
      //   Set reactive variables
      blogList.value = response.data;
    }

    return {
      slug,
      blogArticle,
      blogList,
    };
  },
};
</script>

<style></style>
