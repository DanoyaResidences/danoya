<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <header-image />
    <blog-list
      :blogs="blogs"
      :changePage="changePage"
      :pagination="pagination"
      :currentPage="currentPage"
    />
    <Footer />
  </div>
</template>

<script>
import HeaderImage from "../../components/blog/HeaderImage.vue";

export default {
  components: { HeaderImage },

  async setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Welcome to the home page of Beach Side (by Danoya). A blog dedicated to all that you need to know on the Island of the Gods",
        },
      ],
    });
    // For Strapi DB access
    const { find } = useStrapi();
    // Init vars
    const blogs = ref([]);
    const pagination = ref({});
    const currentPage = ref(1);

    // Make API call for blog data
    try {
      await retrieveBlogs();
    } catch (error) {
      console.error("Failed to retrieve blogs: ", error);
    }

    // Makes an API call to retrieve blogs for current page
    async function retrieveBlogs() {
      const response = await find("articles", {
        // STRAPI request params
        populate: "*",
        sort: ["publishedAt:desc"],
        pagination: {
          page: currentPage.value,
          pageSize: 10,
          withCount: true,
        },
      });
      //   Set reactive variables
      blogs.value = response.data;
      pagination.value = response.meta.pagination;
    }

    // Pagination
    // Changes the page to page parameter value
    async function changePage(newPage) {
      // Set current page var to new page
      currentPage.value = newPage;
      //   Use updated page to retrieve blogs again
      await retrieveBlogs();
    }

    return { blogs, changePage, pagination, currentPage };
  },
};
</script>

<style></style>
