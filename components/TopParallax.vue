<template>
  <div class="h-[80vh] sm:min-h-[550px] -mt-56 mb-24">
    <!-- Parallax -->
    <div
      :style="`background-image: url(${imagePath})`"
      class="w-full h-full object-cover bg-cover bg-center sm:min-h-[550px]"
    >
      <!-- Picture filter -->
      <div class="w-full h-full bg-gray-700 opacity-70 flex justify-center">
        <!-- Text -->
        <div class="w-full flex align-middle mt-10">
          <h1
            style="line-height: 70px"
            class="mt-72 mx-auto text-xl md:text-3xl lg:text-4xl text-center text-white font-theme-font"
          >
            <span
              style="line-height: 30px"
              class="font-light text-lg md:text-2xl lg:text-2xl font-serif"
            >
              {{ heading }}
            </span>
            <br />
            {{ subHeading }}
          </h1>
        </div>
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
