<template>
  <div>
    <div class="flex flex-row flex-wrap my-20 w-10/12 mx-auto">
      <div class="w-full xl:w-4/12 mx-auto">
        <div class="mx-auto">
          <h2 class="mb-6 underline underline-offset-8">{{ content.title }}</h2>
          <!-- Section intro -->
          <div
            class="text-sm leading-7 tracking-widest mb-6"
            v-html="content.introText"
          ></div>
        </div>
      </div>
      <!-- Team section -->
      <div class="w-full xl:w-8/12 flex flex-wrap flex-row sm:my-8 mx-auto">
        <!-- Image -->
        <div class="w-full sm:w-4/12 mx-auto my-auto sm:h-full px-4">
          <img
            class="object-cover sm:h-full w-full"
            :src="currentTeamMember.imageSrc"
            :alt="currentTeamMember.alt"
          />
          <!-- Gallery button box -->
          <div class="relative right-0 bg-gray-200 flex flex-row w-24">
            <button
              class="hover:bg-gray-400 w-1/4 h-10 transition-all duration-100"
              @click="modifyGalleryCounter(-1)"
            >
              ←
            </button>
            <div class="text-center w-1/2 flex align-middle">
              <p class="my-auto mx-auto">
                {{ galleryCounter + 1 }} | {{ content.team.length }}
              </p>
            </div>
            <button
              class="hover:bg-gray-400 w-1/4 h-10 transition-all duration-100"
              @click="modifyGalleryCounter(1)"
            >
              →
            </button>
          </div>
        </div>
        <!-- Team text section -->
        <div
          class="w-full sm:w-6/12 mx-auto text-sm leading-7 tracking-widest mt-6"
        >
          <h4>{{ currentTeamMember.name }}</h4>
          <p class="mb-6">{{ currentTeamMember.role }}</p>
          <div
            class="min-h-[140px] md:min-h-[216px]"
            v-html="currentTeamMember.text"
          ></div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
    },
  },
  setup(props) {
    // Stores current gallery index
    const galleryCounter = ref(0);
    // Computes team member that is at index of gallery counter
    const currentTeamMember = computed(() => {
      return props.content.team[galleryCounter.value];
    });

    //  Click handler for modifying gallery counter by an increment
    function modifyGalleryCounter(increment) {
      // Find new index
      const newCount = galleryCounter.value + increment;

      //   If lower than 0, return to last item
      if (newCount < 0) {
        galleryCounter.value = props.content.team.length - 1;
        // If greater than no of images, return to first image
      } else if (newCount > props.content.team.length - 1) {
        galleryCounter.value = 0;
        // else, set as new count
      } else {
        galleryCounter.value = newCount;
      }
    }
    return {
      modifyGalleryCounter,
      galleryCounter,
      currentTeamMember,
    };
  },
};
</script>

<style></style>
