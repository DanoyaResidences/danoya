<template>
  <div class="h-[80vh] sm:min-h-[500px] -mt-56 mb-24">
    <!-- Parallax -->
    <div class="w-full h-full sm:min-h-[500px]">
      <video
        autoplay
        muted
        loop
        class="absolute -z-30 min-w-full h-[80vh] sm:min-h-[500px] object-fill"
      >
        <!-- Show different source based on screen size -->
        <source v-if="videoToShow !== ''" :src="videoToShow" type="video/mp4" />
      </video>
      <!-- Picture filter -->
      <div class="w-full h-full bg-gray-700 opacity-70 flex justify-center">
        <!-- Text -->
        <div class="w-full flex align-middle mt-10">
          <h1
            style="line-height: 70px"
            class="m-auto sm:mt-56 text-xl md:text-3xl lg:text-4xl text-center text-white font-theme-font md:w-1/2"
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
  props: ["heading", "subHeading", "videoPath"],
  setup() {
    // video src url
    const videoToShow = ref("");

    // at setup, check if mobile
    checkIfMobile();

    // Checks on screen width and sets videoToShow to most appliable src video
    function checkIfMobile() {
      // If running on the client
      if (process.client) {
        // Grab width
        let width = window.innerWidth;

        // If width below 700px
        if (width < 700) {
          // Set to mobile video
          videoToShow.value = "videos/danoya_web_34.mp4";
        } else {
          // Else set to larger video
          videoToShow.value = "videos/danoya_web_43.mp4";
        }
      }
    }

    return {
      videoToShow,
    };
  },
  // computed: {
  //   isMobile() {
  //     if (process.client) {
  //       let width = window.innerWidth;
  //       console.log("width: ", width);

  //       if (width < 560) {
  //         console.log("is mobile true");
  //         return true;
  //         // return "videos/danoya_web_34.mp4";
  //       } else {
  //         console.log("is mobile false");
  //         return false;
  //         // return "videos/danoya_web_43.mp4";
  //       }
  //     }
  //   },
  // },
};
</script>

<style></style>
