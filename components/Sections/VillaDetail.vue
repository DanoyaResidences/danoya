<template>
  <div class="flex flex-row mx-auto align-middle w-11/12">
    <div class="w-1/4 hidden md:block">
      <!-- Villa selection -->
      <div class="sticky top-0 left-0 pt-24">
        <ul class="list-none">
          <li
            v-for="(item, index) in villaDetails"
            class="hover:bg-gray-200 p-2 transition-all duration-200"
            :key="'villa-detail-button-' + index"
          >
            <a :href="'#' + underlineAllSpaces(item.name)">
              <h4 class="font-medium text-base">{{ item.name }}</h4>
              <div>{{ item.subText }}</div>
            </a>
          </li>
        </ul>
        <!-- Vertical text -->
        <div
          class="absolute text-gray-400 -rotate-90 -left-16 -bottom-20 text-lg"
        >
          Villa Types
        </div>
      </div>
    </div>

    <!-- Villa detail section -->
    <div class="w-full md:w-3/4">
      <div
        class="p-4 pt-20"
        v-for="(item, index) in villaDetails"
        :key="'villa-detail-' + index"
      >
        <!-- Title -->
        <a :id="underlineAllSpaces(item.name)"> </a>
        <h2 class="font-semibold text-3xl m-2">{{ item.name }}</h2>
        <div class="m-4">{{ item.area }}</div>
        <!-- Room carousel -->
        <div class="leading-8 mt-9">
          <!-- Grab the gallery counter and show associated image from current villa image array-->
          <img
            :src="item.images[galleryCounters[item.name]].src"
            :alt="item.images[galleryCounters[item.name]].alt"
            class="w-full h-[500px] bg-gray-200 object-cover"
          />
        </div>
        <!-- Gallery buttons -->
        <div
          class="bg-gray-100 mt-1 w-1/4 ml-auto h-10 flex align-middle rounded-md"
        >
          <div class="flex flex-row w-full">
            <button
              class="w-1/4 hover:bg-gray-200 rounded-l-md"
              @click="
                modifyGalleryCounterForVilla(item.name, -1, item.images.length)
              "
            >
              ←
            </button>
            <div class="w-2/4 text-center my-auto">
              {{ getGalleryCounterForType(item.name) + 1 }}/{{
                item.images.length
              }}
            </div>
            <button
              class="w-1/4 hover:bg-gray-200 rounded-r-md"
              @click="
                modifyGalleryCounterForVilla(item.name, 1, item.images.length)
              "
            >
              →
            </button>
          </div>
        </div>
        <!-- Villa content section -->
        <div class="flex flex-row mt-8">
          <!-- Left side: text -->
          <div class="w-full md:w-4/6 md:pr-10">
            <!-- Text description -->
            <div v-html="item.description" class="leading-loose"></div>

            <!-- icon + caption container -->
            <h3 class="pt-6">Features</h3>
            <ul class="p-3">
              <li
                v-for="(icon, iconIndex) in item.featureIcons"
                :key="item.name + '-icon-' + iconIndex"
                class="flex flex-row h-12"
              >
                <!-- Icon -->
                <div class="w-1/3 text-center mx-auto my-auto">
                  <i
                    :class="'text-blue-300 ' + icon.type"
                    aria-hidden="true"
                  ></i>
                </div>
                <!-- Text -->
                <div class="w-2/3 my-auto">{{ icon.text }}</div>
              </li>
            </ul>
          </div>

          <!-- Right side: Room cycle gallery -->
          <div class="w-2/6 relative pt-6 pl-6 hidden md:block">
            <!-- Image slider -->
            <div class="relative">
              <auto-carousel />

              <img
                src="#"
                alt="Sample"
                class="w-7/8 h-[300px] bg-purple-400 pb-20"
              />
            </div>
            <div
              class="bg-gray-200 absolute left-0 top-0 right-auto bottom-auto w-5/6 h-64 -z-10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AutoCarousel from "../widgets/AutoCarousel.vue";
export default {
  components: { AutoCarousel },
  setup() {
    const villaDetails = [
      {
        name: "Imperial 2",
        subText: "Two bedroom",
        area: "250-300m²",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic ipsum assumenda quaerat laudantium ea quos vel aliquam. Illo adipisci harum eius eaque tempora necessitatibus repudiandae sint doloremque deserunt? Explicabo!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic ipsum assumenda quaerat laudantium ea quos vel aliquam. Illo adipisci harum eius eaque tempora necessitatibus repudiandae sint doloremque deserunt? Explicabo!</p>",
        images: [
          { src: "/images/Home/Danoya_LS_1.jpg", alt: "Image 1" },
          { src: "/images/Home/Danoya_LS_1.jpg", alt: "Image 2" },
          { src: "/images/Home/Danoya_LS_1.jpg", alt: "Image 3" },
          { src: "/images/Home/Danoya_LS_1.jpg", alt: "Image 4" },
        ],
        slidingImages: [
          {
            src: "/images/Home/Danoya_LS_1.jpg",
          },
          {
            src: "/images/Home/Danoya_LS_1.jpg",
          },
        ],
        featureIcons: [
          {
            type: "fa fa-bed fa-2x",
            text: "Twin bed",
          },
        ],
      },
      {
        name: "Grand Imperial 3",
        subText: "Our most premium offering",
        area: "250-300m²",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic ipsum assumenda quaerat laudantium ea quos vel aliquam. Illo adipisci harum eius eaque tempora necessitatibus repudiandae sint doloremque deserunt? Explicabo!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic ipsum assumenda quaerat laudantium ea quos vel aliquam. Illo adipisci harum eius eaque tempora necessitatibus repudiandae sint doloremque deserunt? Explicabo!</p>",
        images: [
          { src: "/images/Home/Danoya_LS_1.jpg" },
          { src: "/images/Home/Danoya_LS_1.jpg" },
          { src: "/images/Home/Danoya_LS_1.jpg" },
          { src: "/images/Home/Danoya_LS_1.jpg" },
        ],
        slidingImages: [
          {
            src: "/images/Home/Danoya_LS_1.jpg",
          },
          {
            src: "/images/Home/Danoya_LS_1.jpg",
          },
        ],
        featureIcons: [
          {
            type: "fa fa-bed fa-2x",
            text: "Twin bed",
          },
        ],
      },
    ];
    const galleryCounters = ref({
      "Grand Imperial 3": 0,
      "Imperial 2": 0,
    });

    function getGalleryCounterForType(villaName) {
      return galleryCounters.value[villaName];
    }

    // function getActiveImageForType(villaName) {
    //   // Search villa details array for villa in question
    //   const villaDetails = villaDetails.find(
    //     (villa) => villa.name === villaName
    //   );
    //   //   Grab images
    //   const images = villaDetails.images;
    //   //   Find current counter for type
    //   const currentCounter = getGalleryCounterForType(villaName);
    //   //   Return image details
    //   return images[currentCounter];
    // }

    function modifyGalleryCounterForVilla(villaName, increment, imagesLength) {
      // Grab current count
      let currentCount = galleryCounters.value[villaName];
      //   increment
      let newCount = currentCount + increment;
      //   Find max index for images
      const imageMaxIndex = imagesLength - 1;

      //   If lower than 0
      if (newCount < 0) {
        newCount = imageMaxIndex;
        // If greater than no of images
      } else if (newCount > imageMaxIndex) {
        newCount = 0;
      }

      // Assign new count to gallery counters
      galleryCounters.value[villaName] = newCount;
    }

    function underlineAllSpaces(string) {
      return string.replace(/ /g, "_");
    }

    return {
      villaDetails,
      getGalleryCounterForType,
      modifyGalleryCounterForVilla,
      underlineAllSpaces,
      galleryCounters,
    };
  },
};
</script>

<style></style>
