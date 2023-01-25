<template>
  <div class="w-10/12 md:w-10/12 mx-auto mt-20">
    <h2
      class="text-3xl tracking-wider text-left md:text-center m-4 underline underline-offset-8"
    >
      {{ content.title }}
    </h2>
    <!-- First row of image and content -->
    <div class="flex flex-row align-middle flex-wrap">
      <div class="w-full md:w-5/12 my-auto px-2" v-html="content.topText"></div>
      <div class="mb-2 mt-4 md:mb-0 w-full md:w-7/12 flex align-bottom">
        <img
          class="object-cover"
          :src="returnCurrentGalleryImage(galleryCounter).src"
          :alt="returnCurrentGalleryImage(galleryCounter).alt"
        />
        <!-- Gallery button box -->
        <div class="absolute bg-gray-200 flex-col w-12 hidden md:flex">
          <button
            class="hover:bg-gray-400 h-10 transition-all duration-100"
            @click="modifygalleryCounter(-1)"
          >
            ←
          </button>
          <div class="text-center mt-1">
            <p>{{ galleryCounter + 1 }}</p>
            <p>--</p>
            <p>{{ content.gallery.length }}</p>
          </div>
          <button
            class="hover:bg-gray-400 h-10 transition-all duration-100"
            @click="modifygalleryCounter(1)"
          >
            →
          </button>
        </div>
      </div>
    </div>
    <!-- Second row of image and text content -->
    <div class="flex flex-row align-middle flex-wrap">
      <div
        class="my-10 md:mt-0 md:w-1/2 hidden md:show md:flex md:relative bottom-8"
      >
        <img
          class="object-cover"
          :src="content.bottomImage.src"
          :alt="content.bottomImage.alt"
        />
      </div>
      <div
        class="w-full md:w-1/2 my-auto px-2"
        v-html="content.bottomText"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  setup(props) {
    const galleryCounter = ref(0);
    // Returns the current gallery item based on index
    function returnCurrentGalleryImage(galleryIndex) {
      return props.content.gallery[galleryIndex];
    }

    //  Click handler for modifying gallery counter by an increment
    function modifygalleryCounter(increment) {
      const newCount = galleryCounter.value + increment;
      //   If lower than 0, return to last item
      if (newCount < 0) {
        galleryCounter.value = props.content.gallery.length - 1;
        // If greater than no of images, return to first item
      } else if (newCount > props.content.gallery.length - 1) {
        galleryCounter.value = 0;

        // else return new count
      } else {
        galleryCounter.value = newCount;
      }
    }

    return {
      galleryCounter,
      modifygalleryCounter,
      returnCurrentGalleryImage,
    };
  },
};
</script>

<style></style>
