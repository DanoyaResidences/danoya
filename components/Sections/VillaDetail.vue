<template>
  <div class="flex flex-row mx-auto align-middle w-11/12">
    <div class="w-1/4 hidden lg:block">
      <!-- Villa selection -->
      <div class="sticky top-0 left-0 pt-24">
        <ul class="list-none">
          <!-- Iterate through villas from villa details & add active class if required -->
          <li
            v-for="(item, index) in villaDetails()"
            :class="
              currentActiveVillaSection == item.name
                ? 'hover:bg-gray-200 p-2 transition-all duration-200 bg-gray-200'
                : 'hover:bg-gray-200 p-2 transition-all duration-200'
            "
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
          class="absolute text-gray-400 -rotate-90 -left-16 bottom-60 text-lg"
        >
          Villa Types
        </div>
      </div>
    </div>

    <!-- Villa detail section -->
    <div class="w-full lg:w-3/4">
      <div
        class="p-4 pt-20"
        v-for="(item, index) in villaDetails()"
        :key="'villa-detail-' + index"
      >
        <!-- Title -->
        <a :id="underlineAllSpaces(item.name)"> </a>
        <h2 class="font-semibold text-3xl m-2">{{ item.name }}</h2>
        <div class="m-4 text-xl">{{ item.area }}</div>
        <!-- Room carousel -->
        <div class="leading-8 mt-9">
          <!-- Grab the gallery counter and show associated image from current villa image array-->
          <img
            :src="item.images[galleryCounters[item.name]].src"
            :alt="item.images[galleryCounters[item.name]].alt"
            class="w-full md:h-[500px] h-96 bg-gray-200 object-cover"
          />
        </div>
        <!-- Feature video and gallery button section -->
        <div class="flex flex-row md:flex-wrap flex-wrap-reverse">
          <!-- Feature video -->
          <div
            v-if="item.featureVideo !== ''"
            class="md:w-1/4 w-full mt-1 cursor-pointer group"
          >
            <!-- Icon -->
            <i
              class="fa fa-video-camera mr-2 group-hover:text-blue-300 transition-all duration-75"
              aria-hidden="true"
            ></i>
            <!-- Video Modal button -->
            <div
              type="button"
              class="inline-block text-black font-medium text-xs leading-tight uppercase transition-all duration-300 ease-in-out group-hover:underline"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
              @click="setActiveVideoAndTitle(item.featureVideo, item.name)"
            >
              Feature Video
            </div>
          </div>
          <!-- Gallery buttons -->
          <div
            class="bg-gray-100 mt-1 md:w-1/4 w-full ml-auto h-10 flex align-middle rounded-md"
          >
            <div class="flex flex-row w-full">
              <button
                class="w-1/4 hover:bg-gray-200 rounded-l-md"
                @click="
                  modifyGalleryCounterForVilla(
                    item.name,
                    -1,
                    item.images.length
                  )
                "
              >
                ←
              </button>
              <div class="w-2/4 text-center my-auto">
                {{ getGalleryCounterForType(item.name) + 1 }} /
                {{ item.images.length }}
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
        </div>

        <!-- Villa content section -->
        <div class="flex flex-row mt-8">
          <!-- Left side: text -->
          <div class="w-full md:w-4/6 md:pr-10">
            <!-- Text description -->
            <div v-html="item.description" class="villaDescription"></div>

            <!-- Features container -->
            <h3 class="pt-6">Features</h3>
            <ul class="p-3">
              <li
                v-for="(icon, iconIndex) in item.featureIcons"
                :key="item.name + '-icon-' + iconIndex"
                class="flex flex-row h-12 text-"
              >
                <!-- Icon -->
                <div class="w-1/3 text-center mx-auto my-auto">
                  <i
                    :class="'text-blue-300 ' + icon.type"
                    aria-hidden="true"
                  ></i>
                </div>
                <!-- Text -->
                <div class="w-2/3 my-auto text-sm">{{ icon.text }}</div>
              </li>
            </ul>
          </div>

          <!-- Right side: Room cycle gallery -->
          <div class="w-2/6 relative pt-6 pl-6 hidden md:block">
            <!-- Image slider -->
            <div class="relative">
              <mini-villa-carousel :images="item.slidingImages" />
            </div>
            <div
              class="bg-gray-200 absolute left-0 top-0 right-auto bottom-auto w-5/6 h-60 -z-10"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <widgets-video-modal
      :activeVideo="activeVideo"
      :title="modalTitle"
      :show="showModal"
      :toggleModal="toggleModal"
    />
  </div>
</template>

<script>
import MiniVillaCarousel from "../widgets/MiniVillaCarousel.vue";
import { villaData } from "../../data/data.js";
import VideoModal from "../widgets/VideoModal.vue";

// Modal vars and functions
const showModal = ref(false);
// Toggles show modal to the opposite of current vaue
function toggleModal() {
  showModal.value = !showModal.value;
}

// Underline all spaces in a string for HTML compatibility
function underlineAllSpaces(string) {
  return string.replace(/ /g, "_");
}

// To store anchor tag positions
const anchorTagYPositions = ref({
  "Grand Imperial 3": 0,
  "Imperial 3": 0,
  "Imperial 2": 0,
  "Imperial 1": 0,
  "Royal 5": 0,
  "Royal 3": 0,
  "Royal 2": 0,
});

// Store current active villa sectino as string
const currentActiveVillaSection = ref("");

// Function that is called upon scroll
const monitorScrollForActiveVilla = () => {
  //   Build current anchor tag Y positions
  buildAnchortagPositions();

  // Determine which section is currently active set in reactive variable
  currentActiveVillaSection.value = determineCurrentVillaOnScreen(
    window.scrollY
  );
};

// Build y position of all anchor positions
function buildAnchortagPositions() {
  // Iterate through anchortagposition object
  for (const key in anchorTagYPositions.value) {
    //  Grab y position from window
    const yPosition = document.getElementById(
      underlineAllSpaces(key)
    ).offsetTop;

    // set y position in anchor tag object
    anchorTagYPositions.value[key] = yPosition;
  }
}

// Determines the last passed villa on the screen and returns as string
function determineCurrentVillaOnScreen(currentScrollY) {
  // Init variable to store the current best guess of active element
  let lastYAnchorPassed = "";

  //   If the current scroll point is passed the position of a villa's anchor,
  //   set it as last villa passed
  if (currentScrollY >= anchorTagYPositions.value["Grand Imperial 3"]) {
    lastYAnchorPassed = "Grand Imperial 3";
  }
  if (currentScrollY >= anchorTagYPositions.value["Imperial 3"]) {
    lastYAnchorPassed = "Imperial 3";
  }
  if (currentScrollY >= anchorTagYPositions.value["Imperial 2"]) {
    lastYAnchorPassed = "Imperial 2";
  }
  if (currentScrollY >= anchorTagYPositions.value["Imperial 1"]) {
    lastYAnchorPassed = "Imperial 1";
  }
  if (currentScrollY >= anchorTagYPositions.value["Royal 5"]) {
    lastYAnchorPassed = "Royal 5";
  }
  if (currentScrollY >= anchorTagYPositions.value["Royal 3"]) {
    lastYAnchorPassed = "Royal 3";
  }
  if (currentScrollY >= anchorTagYPositions.value["Royal 2"]) {
    lastYAnchorPassed = "Royal 2";
  }
  return lastYAnchorPassed;
}

// Store active video data to show in modal
const activeVideo = ref("");
const modalTitle = ref("");

// Sets active video and title for modal
function setActiveVideoAndTitle(videoUrl, newTitle) {
  activeVideo.value = videoUrl;
  modalTitle.value = newTitle;
  // Finally, show the modal
  toggleModal();
}

export default {
  components: { MiniVillaCarousel },
  //   Setup scroll event listener
  beforeMount() {
    window.addEventListener("scroll", monitorScrollForActiveVilla);
  },
  //   Remove scroll event listener  before destroy
  beforeDestroy() {
    window.removeEventListener("scroll", monitorScrollForActiveVilla);
  },

  setup() {
    // Return json data from external file
    function villaDetails() {
      return villaData;
    }
    // To store current image carousel counter for each villa
    const galleryCounters = ref({
      "Grand Imperial 3": 0,
      "Imperial 3": 0,
      "Imperial 2": 0,
      "Imperial 1": 0,
      "Royal 5": 0,
      "Royal 3": 0,
      "Royal 2": 0,
    });

    // Get the current value of the carousel slide
    function getGalleryCounterForType(villaName) {
      return galleryCounters.value[villaName];
    }

    // Modify the gallery counter for a specific villa  by an increment
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

    return {
      villaDetails,
      getGalleryCounterForType,
      modifyGalleryCounterForVilla,
      underlineAllSpaces,
      galleryCounters,
      villaDetails,
      currentActiveVillaSection,
      activeVideo,
      modalTitle,
      showModal,
      toggleModal,
      setActiveVideoAndTitle,
    };
  },
};
</script>

<style>
.villaDescription p {
  font-size: 0.9rem;
  line-height: 1.3rem;
}
@media only screen and (min-width: 768px) {
  .villaDescription p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
