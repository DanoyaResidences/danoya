<template>
  <div class="mt-20 mb-20">
    <h1
      class="font-theme-font font-semibold text-4xl tracking-wide mb-10 text-center"
    >
      Our Villas
    </h1>
    <div class="relative w-full h-full mx-auto">
      <div
        v-for="(item, index) in carouselImages"
        :key="'carousel-img-' + index"
        :class="showHideImageOnActiveStatus(index)"
      >
        <img
          class="w-full h-[400px] md:h-[600px] object-cover"
          :src="item.imageSrc"
        />
        <!-- <div
                class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white"}
              >
                Flower {index} Caption
              </div>  -->
      </div>

      <div class="w-full px-5 py-3 text-center">
        {{ showCurrentActiveCaption(slideActiveIndex) }}
      </div>
      <!-- The previous button -->
      <a
        class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
        @click="moveSlide(-1)"
      >
        ❮
      </a>

      <!-- The next button -->
      <a
        class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
        @click="moveSlide(1)"
      >
        ❯
      </a>
    </div>
    <br />

    <!-- The dots -->
    <div class="flex justify-center items-center space-x-5">
      <div
        v-for="(item, index) in carouselImages"
        :key="'carousel-dots-' + index"
        :class="showHideDotOnActiveStatus(index)"
        @click="setSlideTo(index)"
      ></div>
    </div>
  </div>
</template>

<script>
const carouselImages = [
  {
    imageSrc:
      "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
    caption: "Addicted to Champagne",
  },
  {
    imageSrc:
      "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
    caption: "Addicted to Champagne",
  },
  {
    imageSrc:
      "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
    caption: "Addicted to Champagne",
  },
];
const slideActiveIndex = ref(0);

// increase/decrease active slide index for prev/next button
function moveSlide(moveStep) {
  const n = parseInt(moveStep);
  return setActiveSlideIndex(slideActiveIndex.value + n);
}

// change slide with the dots
function setSlideTo(n) {
  return setActiveSlideIndex(n);
}

// Apply different css classes on slide images based on index of image
function showHideImageOnActiveStatus(imageIndex) {
  if (slideActiveIndex.value == imageIndex) {
    return `slide relative`;
  } else {
    return `slide relative hidden`;
  }
}
// Provides different css classes for dots based on if image index is equal to current active index
function showHideDotOnActiveStatus(imageIndex) {
  if (slideActiveIndex == imageIndex) {
    return `dot w-4 h-4 rounded-full cursor-pointer bg-yellow-500`;
  } else {
    return `dot w-4 h-4 rounded-full cursor-pointer bg-green-600`;
  }
}

// Return the caption of the currently active item
function showCurrentActiveCaption(currentAciveIndex) {
  return carouselImages[currentAciveIndex].caption;
}

// Change the slide index to the parameter value
// If last, return to beginning
function setActiveSlideIndex(n) {
  // Convert to int
  console.log("setting slide to: ", n);
  // if n is greater than carousel image array length
  if (n > carouselImages.length - 1) {
    // Set index to 0
    slideActiveIndex.value = 0;
  } else if (n < 0) {
    // Set it to last item
    slideActiveIndex.value = carouselImages.length;
  } else {
    // Else set to parameter value
    slideActiveIndex.value = n;
  }
}
export default {
  setup() {
    return {
      // Carousel visual functions
      showCurrentActiveCaption,
      showHideImageOnActiveStatus,
      showHideDotOnActiveStatus,
      moveSlide,
      setSlideTo,
      //   component variables
      slideActiveIndex,
      carouselImages,
    };
  },
};
</script>

<style></style>
