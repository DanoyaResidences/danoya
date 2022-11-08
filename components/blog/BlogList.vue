<template>
  <div class="w-full md:w-10/12 mx-auto border-2 border-gray-300 shadow-md">
    <h1 class="text-3xl md:text-7xl mx-4 mt-8 font-serif">Beachside</h1>
    <span class="mx-6">A blog by Danoya</span>
    <!-- Pagination control -->
    <div class="flex flex-row w-full md:w-60 mx-auto">
      <div class="w-1/4">
        <button
          class="rounded-lg border-2 bg-gray-400 w-full hover:bg-gray-200 transition-all duration-400"
        >
          ❮
        </button>
      </div>
      <div class="w-1/2 text-center">
        {{ currentPage > 1 ? `<a>1</a>` : "" }}
        <button disabled class="rounded-lg border-2">
          {{ currentPage }}
        </button>
      </div>

      <div class="w-1/4">
        <button
          class="rounded-lg border-2 bg-gray-400 w-full hover:bg-gray-200 transition-all duration-400"
        >
          ❯
        </button>
      </div>
    </div>
    <!-- Featured article -->
    <div
      class="w-10/12 mx-auto p-4 my-8 hover:border-4 transition-all hover:border-gray-300 border-white duration-400 rounded-lg"
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
  props: ["blogs", "pagination", "changePage", "currentPage"],
  setup(props) {
    // Init array for blog data
    let blogTiles = [];
    // Obtain prefix for strapi to add to url
    const urlPrefix = process.env.STRAPI_URL || "http://localhost:1337";

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

      // push to blog tiles array
      blogTiles.push({
        title: element.attributes.title,
        // Store converted text in content
        content: textContent + "...",
        published: moment(element.attributes.publishedAt).format(
          "MMMM Do YYYY"
        ),
        slug: element.attributes.slug,
        // handle image if present
        image: buildImageDetailsIfAvailable(element),
      });
    });

    // Remove most recent item and set as featured
    const featured = blogTiles.pop();

    // Reverse array to make from newest to oldest
    blogTiles.reverse();

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
        return {
          name: "",
          alt: "",
          caption: "",
          url: "",
        };
      }
    }

    return {
      blogTiles,
      urlPrefix,
      featured,
    };
  },
};
</script>

<style></style>
