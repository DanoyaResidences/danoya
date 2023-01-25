<template>
  <div
    class="sticky md:absolute bg-gray-300 md:bg-transparent left-0 top-0 right-0 bottom-auto z-10 md:h-36 h-12 sm:h-16"
  >
    <div class="flex flex-row text-secondary h-full">
      <!-- column 1 -->
      <div class="flex-auto w-1/4">
        <!-- Element shown based on screen size -->
        <div
          @click="toggleSidebar"
          class="group flex justify-center align-middle md:hidden w-full h-full transition-all duration-300 hover:bg-blue-400 hover:text-white"
        >
          <!-- Show icon based on side bar toggle -->
          <!-- Icons -->
          <i
            v-show="sidebarActive"
            class="fa fa-times text-black group-hover:text-white my-auto mx-auto"
            aria-hidden="true"
          ></i>
          <i
            v-show="!sidebarActive"
            class="fa fa-bars text-black group-hover:text-white my-auto mx-auto"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="flex-auto w-1/2 flex align-middle justify-center">
        <NuxtLink class="h-max flex justify-center align-middle" to="/">
          <img
            class="mx-auto my-auto max-w-36 md:max-h-36 sm:max-h-14 max-h-8 md:mt-4"
            src="/images/Danoya-logo-sm.png"
            alt="Danoya Logo"
          />
        </NuxtLink>
      </div>

      <!-- Column 3 -->
      <div class="flex-auto w-1/4 flex justify-center">
        <!-- Only one of 2 elements (book button link or icon div) below will be visible at any given time -->
        <a
          href="https://app.mews.com/distributor/3a149bb7-5edc-407c-8f07-ac4d0099998d"
          class="hidden md:block my-auto"
        >
          <!-- Book now button -->
          <button
            class="hidden md:block border-2 opacity-75 hover:opacity-90 transition-all duration-200 border-gray-200 py-2 px-4 text-white rounded-md h-12 hover:bg-blue-400"
          >
            Book now
          </button>
        </a>
        <!-- Booking Icon -->
        <div
          class="group flex justify-center md:hidden w-full h-full transition-all duration-300 bg-blue-400 hover:bg-gray-700"
        >
          <a
            href="https://app.mews.com/distributor/3a149bb7-5edc-407c-8f07-ac4d0099998d"
            class="w-full h-full flex align-middle"
          >
            <div class="flex align-middle mx-auto group-hover:text-blue-400">
              <i
                class="fa fa-calendar-o text-white my-auto mx-auto"
                aria-hidden="true"
              ></i>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- Side bar -->
    <NavSidebar
      :navLinks="navLinks"
      :sidebarState="sidebarActive"
      :toggleSidebar="toggleSidebar"
    />
  </div>
</template>

<script>
export default {
  setup() {
    const count = ref(0);
    const sidebarActive = ref(false);

    const navLinks = [
      {
        href: "/",
        linkName: "Home",
        iconClass: "fa fa-home",
      },
      {
        href: "/about",
        linkName: "About",
        iconClass: "fa fa-book",
      },
      {
        href: "/contact",
        linkName: "Contact",
        iconClass: "fa fa-envelope",
      },
      {
        href: "/villas",
        linkName: "Our Villas",
        iconClass: "fa fa-building",
      },
      {
        href: "/blog",
        linkName: "Blog",
        iconClass: "fa fa-book",
      },
    ];

    // Toggles sidebar
    function toggleSidebar() {
      sidebarActive.value = !sidebarActive.value;
      console.log("Changed to sidebar : ", sidebarActive.value);
    }

    // expose to template and other options API hooks
    return {
      count,
      sidebarActive,
      toggleSidebar,
      navLinks,
    };
  },
};
</script>

<style></style>
