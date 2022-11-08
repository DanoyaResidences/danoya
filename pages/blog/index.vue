<template>
  <nav-bar-top />
  <nav-bar-bottom />
  <div class="h-56 bg-gray-500 -mt-56"></div>
  <blog-list
    :blogs="blogs"
    :changePage="changePage"
    :pagination="pagination"
    :currentPage="currentPage"
  />
  <Footer />
</template>

<script>
export default {
  async setup() {
    // For Strapi DB access
    const { find } = useStrapi();
    // Init vars
    const blogs = ref([{}]);
    const pagination = ref({});
    const currentPage = ref(1);

    // Make API call for blog data
    try {
      await retrieveBlogs();
    } catch (error) {
      console.error("error: ", error);
    }

    // Makes an API call to retrieve blogs for current page
    async function retrieveBlogs() {
      const response = await find("articles", {
        // STRAPI request params
        populate: "*",
        pagination: {
          page: currentPage.value,
          pageSize: 10,
          withCount: true,
        },
      });
      //   Set reactive variables
      blogs.value = response.data;
      pagination.value = response.meta;
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
