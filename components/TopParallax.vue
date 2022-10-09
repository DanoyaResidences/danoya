<template>
  <div class="h-[80vh] md:h-screen -mt-52">
    <!-- Parallax -->
    <div
      :style="`background-image: url(${imagePath})`"
      class="w-full h-full bg-no-repeat bg-cover bg-fixed bg-center"
    >
      <!-- Picture filter -->
      <div class="w-full h-full bg-gray-700 opacity-70 flex justify-center">
        <h1
          style="line-height: 70px"
          class="my-auto text-3xl sm:text-4xl text-center text-white font-theme-font"
        >
          <span
            style="line-height: 30px"
            class="font-light text-lg sm:text-2xl font-serif"
          >
            {{ heading }}
          </span>
          <br />
          {{ subHeading }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading", "subHeading", "imagePath"],
};
</script>

<style></style>
