<template>
  <div class="w-full md:w-10/12 mx-auto">
    <h2 class="text-3xl tracking-wider text-left md:text-center m-8">
      The title
    </h2>
    <!-- First row of image and content -->
    <div class="flex flex-row align-middle flex-wrap">
      <div class="w-full md:w-2/6 my-auto">
        <p class="text-base tracking-widest mb-8 mt-5 mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>
        <p class="text-base tracking-widest mb-8 mt-5 mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro.
        </p>
        <a class="mx-5" href="/about">Learn More</a>
      </div>
      <div class="my-10 md:mb-0 w-full md:w-4/6 flex align-bottom">
        <img
          class="object-cover"
          :src="returnCurrentGalleryImageSrc(galleryCounter).src"
          alt=""
        />
        <!-- Gallery button box -->
        <div class="absolute bg-gray-200 flex flex-col w-12">
          <button
            class="hover:bg-gray-400 h-10 transition-all duration-100"
            @click="modifygalleryCounter(-1)"
          >
            ←
          </button>
          <div class="text-center mt-1">
            <p>{{ galleryCounter + 1 }}</p>
            <p>--</p>
            <p>{{ galleryImages.length }}</p>
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
          src="images/villas/Grand_Imperial/carousel/GI1_web.jpeg"
          alt=""
        />
      </div>
      <div class="w-full md:w-1/2 my-auto">
        <p class="text-base tracking-widest mb-8 mt-5 mx-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>
        <p class="text-base tracking-widest mb-8 mt-5 mx-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id,
          officia consequatur, labore voluptatibus reprehenderit corporis porro
          voluptatem non iste cupiditate quae quidem consectetur ab illo soluta,
          repudiandae quo? Consectetur.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const galleryCounter = ref(0);
    const galleryImages = [
      {
        src: "images/spirit/spirit_1_web.jpeg",
        alt: "",
      },
      {
        src: "images/spirit/spirit_2_web.jpeg",
        alt: "",
      },
      {
        src: "images/spirit/spirit_3_web.jpeg",
        alt: "",
      },
    ];

    function returnCurrentGalleryImageSrc(galleryIndex) {
      return galleryImages[galleryIndex];
    }

    function modifygalleryCounter(increment) {
      const newCount = galleryCounter.value + increment;
      //   If lower than 0
      if (newCount < 0) {
        galleryCounter.value = galleryImages.length - 1;
        // If greater than no of images
      } else if (newCount > galleryImages.length - 1) {
        galleryCounter.value = 0;
      } else {
        galleryCounter.value = newCount;
      }
    }

    return {
      galleryCounter,
      galleryImages,
      modifygalleryCounter,
      returnCurrentGalleryImageSrc,
    };
  },
};
</script>

<style></style>
