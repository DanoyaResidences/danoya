<template>
  <div class="w-full md:w-10/12 mx-auto shadow-md my-8">
    <div class="flex flex-row">
      <!-- Article -->
      <div class="w-full md:w-8/12 py-10">
        <h1 class="text-4xl ml-6 mt-6">{{ blog.title }}</h1>
        <p class="ml-6 text-gray-400">{{ convertTime(blog.publishedAt) }}</p>
        <div
          class="w-full flex align-middle p-6 pb-2"
          v-if="headerImage !== {}"
        >
          <img :src="headerImage.url" :alt="headerImage.alt" />
        </div>
        <div class="p-6 pt-0">
          <blog-text :textContent="blog.content" />
        </div>
      </div>
      <!-- Sidebar -->
      <div class="w-4/12 my-20 hidden md:block">
        <div class="my-auto">
          <div
            class="w-10/12 border-blue-300 border-4 p-4 h-5/6 mx-auto rounded-lg shadow-md"
          >
            <h3 class="text-base font-bold">Other articles:</h3>
            <br />
            <ul>
              <li
                v-for="(item, index) in blogList"
                :key="`blog-list-${index}`"
                class="my-2 text-sm"
              >
                <NuxtLink
                  :to="`/blog/${item.attributes.slug}`"
                  class="hover:underline"
                >
                  {{ shorterTitle(item.attributes.title) }} -
                  <span class="text-xs">{{
                    convertTime(item.attributes.publishedAt)
                  }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import BlogText from "./BlogText.vue";

export default {
  components: { BlogText },
  props: ["blog", "blogList"],
  setup(props) {
    const urlPrefix = useStrapiUrl().replace("/api", "");
    let headerImage = ref({});

    // If an image is present
    if (props.blog.image.data !== null) {
      // Set header image
      headerImage.value = props.blog.image.data.attributes;
      //   Amend url
      headerImage.value.url = urlPrefix + headerImage.value.url;
    }

    // Convert time to cleaner format
    function convertTime(time) {
      return moment(time).format("MMM Do YYYY");
    }

    // Shortens title if over 20 characters in length, else returns same string
    function shorterTitle(title) {
      if (title.length > 20) {
        return title.slice(0, 19) + "...";
      } else {
        return title;
      }
    }

    return {
      headerImage,
      convertTime,
      shorterTitle,
    };
  },
};
</script>

<style></style>
