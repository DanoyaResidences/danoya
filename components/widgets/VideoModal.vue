<template>
  <div
    :class="show ? 'fixed top-0 h-full w-full z-10' : 'hidden'"
    @click="toggleModal"
  >
    <!-- Background -->
    <div class="fixed top-0 bg-gray-500 h-full w-full opacity-50"></div>
    <!-- Modal -->
    <div
      class="relative top-[25vh] w-full md:w-1/2 outline-none overflow-x-hidden overflow-y-auto mx-auto"
    >
      <div class="relative w-auto pointer-events-none">
        <div
          class="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <!-- Header -->
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-2 bg-blue-300 border-b border-gray-200 rounded-t-md"
          >
            <h5 class="text-xl font-medium leading-normal text-white">
              {{ title }}
            </h5>
          </div>

          <!-- Body -->
          <div class="modal-body relative p-2">
            <iframe
              width="560"
              class="w-full"
              height="315"
              :src="activeVideo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeVideo", "title", "show", "toggleModal"],
  setup() {},
};
</script>

<style></style>
