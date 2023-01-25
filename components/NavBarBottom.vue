<template>
  <div
    :class="
      navbarBgVisible
        ? 'sticky top-0 z-10 mt-40 bg-gray-100 transition-all hidden md:block duration-500'
        : 'sticky top-0 z-10 mt-40 bg-transparent transition-all hidden md:block duration-500'
    "
  >
    <div class="flex flex-row">
      <!-- First column  -->
      <!-- Show one of below items based on if navbarBgVisible -->
      <!-- Return column with content -->
      <div
        v-show="navbarBgVisible"
        class="w-1/6 justify-center hover:bg-blue-300 transition-all duration-300"
      >
        <NuxtLink to="/">
          <img
            class="mx-auto max-w-36 max-h-12"
            src="/images/Danoya-logo-sm.png"
            alt="Danoya Home"
          />
        </NuxtLink>
      </div>
      <!-- Return empty column for spacing -->
      <div v-show="!navbarBgVisible" class="w-1/6"></div>

      <!-- Second column -->
      <div class="flex w-2/3 justify-center">
        <ul class="flex flex-row">
          <li
            v-for="(link, index) in navLinks"
            :key="'nav-' + index"
            class="mx-6 my-3 font-theme-font"
          >
            <NuxtLink
              :class="
                navbarBgVisible
                  ? 'group text-gray-700 transition-all duration-300'
                  : 'group text-gray-300 transition-all duration-300'
              "
              :to="link.href"
            >
              <div class="font-serif">{{ link.linkName }}</div>
              <div
                class="w-0 h-0.5 group-hover:w-full mx-auto group-hover:bg-blue-400 transition-all duration-300 rounded"
              ></div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Third column -->
      <!-- Show one of below items based on if navbarBgVisible -->
      <a
        v-show="navbarBgVisible"
        href="https://app.mews.com/distributor/3a149bb7-5edc-407c-8f07-ac4d0099998d"
        class="text-white bg-blue-300 hover:text-black w-1/6 hover:bg-gray-200 transition-all duration-300"
      >
        <div class="h-full flex justify-center">
          <span class="my-auto">Book now</span>
        </div>
      </a>

      <div v-show="!navbarBgVisible" class="w-1/6"></div>
    </div>
  </div>
</template>

<script>
const navbarBgVisible = ref(false);

const changeBackground = () => {
  //   console.log(window.scrollY);
  // If greater than 210 pixels
  if (window.scrollY >= 350) {
    navbarBgVisible.value = true;
  } else {
    navbarBgVisible.value = false;
  }
};
export default {
  props: ["navLinks"],
  beforeMount() {
    window.addEventListener("scroll", changeBackground);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", changeBackground);
  },

  setup() {
    const navLinks = [
      {
        href: "/",
        linkName: "Home",
      },
      {
        href: "/about",
        linkName: "About",
      },
      {
        href: "/contact",
        linkName: "Contact",
      },
      {
        href: "/villas",
        linkName: "Our Villas",
      },
      {
        href: "/blog",
        linkName: "Blog",
      },
    ];
    // Change background if above 160 px: sets state var to Boolean

    return {
      navbarBgVisible,
      navLinks,
    };
  },
};
</script>

<style></style>
