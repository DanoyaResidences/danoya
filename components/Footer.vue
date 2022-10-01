<template>
  <div class="h-64 border-t-2">
    <div class="flex flex-row flex-wrap">
      <!-- Spacer -->
      <div class="flex-auto w-1/4 sm:w-0"></div>
      <!-- Logo & details -->
      <div
        class="flex-auto w-full sm:w-1/2 md:w-1/4 justify-center text-center pt-4"
      >
        <a href="/">
          <img
            class="mx-auto max-w-22 max-h-28 justify-center"
            src="/images/Danoya-logo-sm.png"
            alt="Danoya small logo"
          />
        </a>
        <div class="flex justify-center">
          <p class="text-xs m-2 text-center mx-auto w-2/3">
            Jl. Batu Belig No. 559, Seminyak, Kerobokan Kelod, Kec. Kuta Utara,
            Kabupaten Badung, Bali 80361
          </p>
        </div>
        <p class="text-xs">+62 361 4735305</p>
        <a
          class="text-xs hover:underline underline-offset-8"
          href="mailto:reservations@danoya.com"
        >
          Reservations@Danoya.com
        </a>
      </div>
      <!-- Link column -->
      <div class="flex-auto w-full md:w-1/4 sm:w-1/2 my-auto">
        <ul class="list-none">
          <li
            v-for="(pageLink, index) in links"
            :key="'link-' + index"
            class="first:mt-3 last:mb-3 m-2 text-center sm:text-left flex justify-center"
          >
            <a
              class="text-sm hover:underline underline-offset-8"
              :href="pageLink.link"
            >
              {{ pageLink.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex-auto w-1/4 sm:w-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const links = [
      {
        title: "Contact",
        link: "/contact",
      },
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Our History",
        link: "/history",
      },
      {
        title: "Villas",
        link: "/villas",
      },
    ];
    return {
      links,
    };
  },
};
</script>

<style></style>
