<template>
  <div
    class="flex w-5/6 mx-auto flex-col md:flex-row flex-wrap mt-20 align-middle shadow-md mb-5"
  >
    <div class="w-full md:w-1/2 mb-8 md:px-5">
      <h2
        class="font-theme-font font-semibold text-3xl tracking-wide mb-6 text-center"
      >
        {{ content.title }}
      </h2>
      <!-- Content -->
      <div
        class="flex h-full flex-col text-sm line leading-7 md:leading-9 mx-4 tracking-wide textContent"
        v-html="content.text"
      ></div>
    </div>
    <div class="w-full md:w-1/2 md:px-5 flex align-middle mb-5">
      <img
        class="mx-3 max-w-fit w-11/12 object-cover"
        :src="content.imageSrc"
        alt="Danoya Logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style>
/* .textContent p {
  font-size: 0.875rem;
  line-height: 1.5rem;
} */
/* @media only screen and (min-width: 768px) {
  .textContent p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
} */
</style>
