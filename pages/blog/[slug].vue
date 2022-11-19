<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <header-image />
    <blog-content :blog="blogArticle" :blogList="blogList" />
    <Footer />
  </div>
</template>

<script>
import HeaderImage from "../../components/blog/HeaderImage.vue";
export default {
  components: { HeaderImage },
  async setup() {
    // Init strapi
    const { findOne, find } = useStrapi();
    // Extract route params
    const route = useRoute();
    const slug = route.params.slug;
    let blogArticle = ref({});
    let blogList = ref([]);

    try {
      // Retrieve blog and blog list
      await retrieveBlogArticle();
      await retrieveBlogs();

      if (blogArticle.value.metaDescription !== null) {
        // set head
        useHead({
          meta: [
            {
              name: "description",
              content: blogArticle.value.metaDescription,
            },
          ],
        });
      }
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
    console.log("blogArticle.value: ", blogArticle.value);

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
