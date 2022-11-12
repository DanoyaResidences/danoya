<template>
  <div class="w-full md:w-10/12 mx-auto border-2 border-gray-300 shadow-md">
    <!-- Title -->
    <h1 class="text-3xl md:text-7xl mx-4 mt-8 font-serif">Beachside</h1>
    <span class="mx-6">A blog by Danoya</span>
    <!-- Pagination control -->
    <div class="flex flex-row w-full md:w-60 mx-auto">
      <div class="w-1/4">
        <!-- reverse button (disabled if at 1) -->
        <button
          :class="
            currentPage == 1
              ? 'rounded-lg border-2 w-full bg-gray-200 transition-all duration-200'
              : 'rounded-lg border-2 bg-gray-400 w-full hover:bg-gray-200 transition-all duration-200'
          "
          :disabled="currentPage == 1"
          @click="changePageAndUpdateBlogPage(currentPage - 1)"
        >
          ❮
        </button>
      </div>
      <!-- Specific page button section -->
      <div class="w-1/2 text-center">
        <button
          v-for="(item, index) in pageButtonArray"
          :disabled="item.disabled"
          :class="
            item.disabled
              ? 'rounded-lg border-2 bg-blue-300 w-5'
              : 'rounded-lg border-2 w-5'
          "
          :key="`page-btn-${index}`"
          @click="changePageAndUpdateBlogPage(item.label)"
        >
          {{ item.label }}
        </button>
      </div>

      <!-- forward button (disabled if at max) -->
      <div class="w-1/4">
        <button
          :disabled="currentPage == pagination.pageCount ? true : false"
          :class="
            currentPage == pagination.pageCount
              ? 'rounded-lg border-2 w-full bg-gray-200 transition-all duration-200'
              : 'rounded-lg border-2 bg-gray-400 w-full hover:bg-gray-200 transition-all duration-200'
          "
          @click="changePageAndUpdateBlogPage(currentPage + 1)"
        >
          ❯
        </button>
      </div>
    </div>
    <!-- Featured article -->
    <div
      class="w-10/12 mx-auto p-4 my-8 hover:border-4 transition-all hover:border-gray-300 border-white duration-400 rounded-lg"
      v-if="featured"
    >
      <a :href="`/blog/${featured.slug}`" class="flex flex-row flex-wrap">
        <!-- Feature image -->
        <div class="w-full md:w-1/2 flex align-middle bg-gray-400">
          <img :src="featured.image.url" :alt="featured.image.alt" />
        </div>
        <!-- Text -->
        <div class="w-full md:w-1/2">
          <p class="mx-3 mt-4 text-gray-400 mb-4 md:mb-10">
            {{ featured.published }}
          </p>
          <h5 class="text-2xl mx-3 mt-4">
            {{ featured.title }}
          </h5>
          <div
            class="px-4 text-sm md:text-base lg:text-lg text-gray-400"
            v-html="featured.content"
          ></div>
        </div>
      </a>
    </div>
    <!-- Rest of blog titles -->
    <div class="flex flex-row flex-wrap my-6 w-10/12 mx-auto">
      <div
        v-for="(item, index) in blogTiles"
        :key="`blog-tile-${index}`"
        class="w-full sm:w-1/2 xl:w-1/3 hover:border-4 transition-all duration-400 rounded-lg"
      >
        <a :href="`/blog/${item.slug}`">
          <div class="m-4 p-2">
            <img :src="item.image.url" :alt="item.image.alt" />
            <p class="mx-3 mt-4 text-gray-400">{{ item.published }}</p>
            <h5 class="text-2xl mx-3 mt-1">
              {{ item.title }}
            </h5>
            <div
              class="mx-2 text-sm md:text-base text-gray-400"
              v-html="item.content"
            ></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import moment from "moment";

export default {
  props: {
    blogs: Object,
    pagination: Object,
    changePage: Function,
    currentPage: Number,
  },
  setup(props) {
    // Init array for blog data
    let blogTiles = ref([]);
    let featured = ref({});
    let pageButtonArray = ref([]);
    // Obtain Strapi URL and remove subroute
    const urlPrefix = useStrapiUrl().replace("/api", "");

    try {
      processBlogTileArray();

      // Build pagination buttons
      pageButtonArray.value = buildPaginationButtons();
    } catch (error) {
      console.log("error: ", error);
    }

    // If an image is detected in blogs data, build object.
    // else return object with empty values
    function buildImageDetailsIfAvailable(blogArticle) {
      // If determined to have data
      if (blogArticle.attributes.image.data) {
        // Extract required fields
        return {
          name: blogArticle.attributes.image.data.attributes.name,
          alt: blogArticle.attributes.image.data.attributes.alternativeText,
          caption: blogArticle.attributes.image.data.attributes.caption,
          // add strapi url prefix to image url
          url: urlPrefix + blogArticle.attributes.image.data.attributes.url,
        };

        // Else return empty object
      } else {
        return {};
      }
    }

    // Pagination
    // Build buttons for pagination
    function buildPaginationButtons() {
      const buttonArray = [];

      // If we are on the first page
      if (props.currentPage > 1) {
        let makeButton = props.currentPage - 1;

        // Keep iterating as long as above 0
        while (makeButton > 0) {
          // push button with current label to array
          buttonArray.push({
            label: makeButton,
            disabled: false,
          });
          // reduce button label
          makeButton--;
        }
      }
      // Add current page button as disabled
      buttonArray.push({
        label: props.currentPage,
        disabled: true,
      });

      // If there are pages above the current page
      if (props.currentPage < props.pagination.pageCount) {
        // Set button to make as 1 greater than current
        let makeButton = props.currentPage + 1;
        // Set limit of pages to show to 2
        let maxPageToShow = props.currentPage + 2;

        // While there are pages available and below max
        while (
          makeButton <= props.pagination.pageCount &&
          makeButton <= maxPageToShow
        ) {
          // create button and push to button array
          buttonArray.push({
            label: makeButton,
            disabled: false,
          });
          // increment makebutton by 1
          makeButton++;
        }
      }
      return buttonArray;
    }

    // Refreshes blog tiles with latest data
    function processBlogTileArray() {
      // Reset current blog tiles
      blogTiles.value = [];
      // Iterate through data and Extract required information
      props.blogs.forEach((element) => {
        // extract text content
        let textContent = element.attributes.content;
        // As long as the text content isn't null
        if (textContent != null) {
          // convert to html and grab first 200 chars
          textContent = marked.parse(textContent).slice(0, 199);
          // Remove the tags to generate a clean synopsis
          textContent = textContent.replace(
            /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
            ""
          );
        }
        // Extract image details
        const imageDetails = buildImageDetailsIfAvailable(element);
        // push to blog tiles array
        blogTiles.value.push({
          title: element.attributes.title,
          // Store converted text in content
          content: textContent + "...",
          published: moment(element.attributes.publishedAt).format(
            "MMMM Do YYYY"
          ),
          slug: element.attributes.slug,
          // handle image if present
          image: imageDetails,
        });
      });

      // if on first page,
      if (props.currentPage == 1) {
        // Remove most recent item and set as featured
        featured.value = blogTiles.value.pop();

        // Else make an empty object
      } else {
        featured.value = false;
      }

      // Reverse array to make from newest to oldest
      blogTiles.value.reverse();
    }

    async function changePageAndUpdateBlogPage(nextPage) {
      await props.changePage(nextPage);

      // Refresh blog tiles
      processBlogTileArray();

      // Build pagination buttons
      pageButtonArray.value = buildPaginationButtons();
      console.log("pageButtonArray.value: ", pageButtonArray.value);
    }

    return {
      blogTiles,
      urlPrefix,
      featured,
      pageButtonArray,
      changePageAndUpdateBlogPage,
    };
  },
};
</script>

<style></style>
