<template>
  <div>
    <h2
      class="text-3xl tracking-wider md:text-left text-center mt-20 mb-10 ml-6 underline"
    >
      Our Villas
    </h2>
    <auto-carousel />
    <!-- Bottom section -->
    <div class="md:w-2/3 w-full mx-auto">
      <!-- Feature video section -->
      <div class="w-full mt-1 mx-auto text-center">
        <div class="inline cursor-pointer group" @click="toggleModal">
          <!-- Icon -->
          <i
            class="fa fa-video-camera mr-2 group-hover:text-blue-300"
            aria-hidden="true"
          ></i>
          <!-- Video Modal button -->
          <div
            type="button"
            class="inline-block text-black font-medium text-xs leading-tight uppercase transition-all duration-300 ease-in-out group-hover:underline"
          >
            Feature Video
          </div>
        </div>
      </div>
      <!-- Text section -->
      <div class="w-10/12 mx-auto">
        <p class="text-center text-sm md:text-base">
          Our team is dedicated to ensuring that your vacation is as stress-free
          and enjoyable as possible, and we are always available to assist you
          with any questions or concerns you may have.
        </p>
        <!-- Link to villas -->
        <span class="block text-right mt-8">
          <NuxtLink
            to="/villas"
            class="font-serif tracking-wider link-secondary transition-all duration-300 hover:mr-4 underline hover:link-primary"
            >Our Villas
          </NuxtLink>
        </span>
      </div>
    </div>
    <widgets-video-modal
      activeVideo="https://www.youtube.com/embed/7NoxHTYgVuw"
      title="Our Villas"
      :show="showModal"
      :toggleModal="toggleModal"
    />
  </div>
</template>

<script>
import AutoCarousel from "../widgets/AutoCarousel.vue";
// Modal variable
const showModal = ref(false);
// Toggles show modal to the opposite of current vaue
function toggleModal() {
  showModal.value = !showModal.value;
}

export default {
  components: {
    AutoCarousel,
  },
  setup() {
    return {
      showModal,
      toggleModal,
    };
  },
};
</script>

<style></style>
