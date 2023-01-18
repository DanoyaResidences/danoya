<template>
  <div class="">
    <h2 class="md:text-center text-3xl mt-20 mb-10">Our Villas</h2>
    <div
      id="carouselCrossfade"
      class="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div
        class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
      >
        <button
          type="button"
          data-bs-target="#carouselCrossfade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselCrossfade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselCrossfade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active float-left w-full">
          <img
            src="images/villas/Grand_Imperial/carousel/GI9_web.jpeg"
            class="block w-full"
            alt="Grand Imperial living area"
          />
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="images/villas/Royal_5/carousel/Royal5_1_web.jpeg"
            class="block w-full"
            alt="Royal 5-bedroom living area"
          />
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="images/villas/Imperial_1/carousel/Imp1_5_web.jpeg"
            class="block w-full"
            alt="Imperial 1 Honeymoon"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 bg-blue-300"
        type="button"
        data-bs-target="#carouselCrossfade"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 bg-blue-300"
        type="button"
        data-bs-target="#carouselCrossfade"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="md:w-2/3 w-full mx-auto">
      <!-- Feature video -->
      <div class="w-full mt-1 mx-auto cursor-pointer group text-center">
        <!-- Icon -->
        <i
          class="fa fa-video-camera mr-2 group-hover:text-blue-300"
          aria-hidden="true"
        ></i>
        <!-- Video Modal button -->
        <div
          type="button"
          class="inline-block text-black font-medium text-xs leading-tight uppercase transition-all duration-300 ease-in-out group-hover:underline"
          data-bs-toggle="modal"
          data-bs-target="#videoModal"
        >
          Feature Video
        </div>
      </div>
      <div class="w-10/12 mx-auto">
        <p class="text-center text-xs md:text-sm">
          Our team is dedicated to ensuring that your vacation is as stress-free
          and enjoyable as possible, and we are always available to assist you
          with any questions or concerns you may have.
        </p>

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
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
