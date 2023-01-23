<template>
  <div
    class="flex w-5/6 mx-auto flex-col md:flex-row flex-wrap mt-20 align-middle shadow-md mb-5"
  >
    <div class="w-full md:w-1/2 mb-8 md:px-5">
      <h2
        class="font-theme-font text-3xl tracking-wide mb-6 text-center underline underline-offset-8"
      >
        {{ content.title }}
      </h2>
      <!-- Content -->
      <div
        class="flex h-full flex-col text-sm line leading-7 md:leading-9 mx-4 tracking-wide textContent"
        v-html="content.text"
      ></div>
    </div>
    <div class="w-full md:w-1/2 px-2 md:px-5 flex align-middle mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1958722196196!2d115.152648615155!3d-8.672914593768368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2476d1479fb15%3A0xdd1e88a9c842fb20!2sDanoya%20Villa!5e0!3m2!1sen!2sid!4v1674462695227!5m2!1sen!2sid"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
