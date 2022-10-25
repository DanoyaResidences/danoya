<template>
  <div
    :class="
      navbarVisible
        ? 'sticky top-0 z-10 mt-40 bg-gray-100 transition-all hidden md:block duration-500'
        : 'sticky top-0 z-10 mt-40 bg-transparent transition-all hidden md:block duration-500'
    "
  >
    <div class="flex flex-row">
      <!-- First column  -->
      <!-- Show one of below items based on if navbarVisible -->
      <!-- Return column with content -->
      <div
        v-show="navbarVisible"
        class="w-1/6 justify-center hover:bg-blue-300 transition-all duration-300"
      >
        <a href="/">
          <img
            class="mx-auto max-w-36 max-h-12"
            src="/images/Danoya-logo-sm.png"
            alt="Danoya Home"
          />
        </a>
      </div>
      <!-- Return empty column for spacing -->
      <div v-show="!navbarVisible" class="w-1/6"></div>

      <!-- Second column -->
      <div class="flex w-2/3 justify-center">
        <ul class="flex flex-row">
          <li
            v-for="(link, index) in navLinks"
            :key="'nav-' + index"
            class="mx-6 my-3 font-theme-font"
          >
            <a
              :class="
                navbarVisible
                  ? 'group text-gray-700 transition-all duration-300'
                  : 'group text-gray-300 transition-all duration-300'
              "
              :href="link.href"
            >
              <div class="font-serif">{{ link.linkName }}</div>
              <div
                class="w-0 h-0.5 group-hover:w-full mx-auto group-hover:bg-blue-400 transition-all duration-300 rounded"
              ></div>
            </a>
          </li>
        </ul>
      </div>
      <!-- Third column -->
      <!-- Show one of below items based on if navbarVisible -->
      <a
        v-show="navbarVisible"
        href="/"
        class="text-white bg-blue-300 hover:text-black w-1/6 hover:bg-gray-200 transition-all duration-300"
      >
        <div class="h-full flex justify-center">
          <span class="my-auto">Book now</span>
        </div>
      </a>

      <div v-show="!navbarVisible" class="w-1/6"></div>
    </div>
  </div>
</template>

<script>
const navbarVisible = ref(false);

const changeBackground = () => {
  //   console.log(window.scrollY);
  // If greater than 210 pixels
  if (window.scrollY >= 350) {
    navbarVisible.value = true;
  } else {
    navbarVisible.value = false;
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
    ];
    // Change background if above 160 px: sets state var to Boolean

    return {
      navbarVisible,
      navLinks,
    };
  },
};
</script>

<style></style>
