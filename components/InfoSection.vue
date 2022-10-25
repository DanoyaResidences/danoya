<template>
  <div
    class="flex w-5/6 mx-auto flex-col md:flex-row flex-wrap mt-20 align-middle shadow-md"
  >
    <div class="w-full md:w-1/2 mb-8 md:px-5">
      <h2
        class="font-theme-font font-semibold text-3xl tracking-wide mb-6 text-center"
      >
        {{ content.title }}
      </h2>
      <!-- Content -->
      <div
        class="flex h-full flex-col text-sm line leading-7 md:leading-9 mx-4 tracking-wide"
        v-html="content.text"
      ></div>
    </div>
    <div class="w-full md:w-1/2 md:px-5 flex align-middle mb-5">
      <img
        class="mx-auto my-auto max-w-fit w-10/12 max-h-80 object-cover"
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

<style></style>
