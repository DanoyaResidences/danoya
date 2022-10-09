<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide relative"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner relative w-full h-80 overflow-hidden">
      <!-- Make first item active -->
      <div class="carousel-item active relative float-left w-full">
        <img :src="images[0].src" class="block w-full" :alt="images[0].alt" />
      </div>

      <!-- Iterate over remaining images -->
      <div
        v-for="(image, index) in images.slice(1)"
        :key="'sliding-' + index"
        class="carousel-item relative float-left w-full"
      >
        <img
          :src="image.src"
          class="block w-full h-80 object-cover"
          :alt="image.alt"
        />
      </div>
      <!-- <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          class="block w-full"
          alt="Camera"
        />
      </div>
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          class="block w-full"
          alt="Exotic Fruits"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
};
</script>

<style></style>
