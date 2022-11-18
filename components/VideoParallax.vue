<template>
  <div class="h-[80vh] md:h-screen -mt-56">
    <!-- Parallax -->
    <div class="w-full h-full">
      <video
        autoplay
        muted
        loop
        class="absolute -z-30 min-w-full h-[80vh] md:min-h-full max-w-none object-fill"
      >
        <!-- Show different source based on screen size -->
        <source v-if="videoToShow !== ''" :src="videoToShow" type="video/mp4" />
      </video>
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
