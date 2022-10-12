<template>
  <div
    class="w-8/12 mx-auto my-20 border-solid border-4 border-gray-200 rounded-md"
  >
    <div>
      <h1 class="mx-auto text-center text-xl md:text-3xl mt-4">Our Services</h1>
    </div>
    <div class="flex flex-row flex-wrap">
      <!-- Service iteration -->
      <div
        class="xl:w-1/3 sm:w-1/2 w-full"
        v-for="(item, index) in serviceData"
        :key="'service-' + index"
      >
        <div class="w-full mb-4 mt-4">
          <div class="flex align-middle mb-3">
            <div
              class="w-10 h-10 mx-auto bg-blue-300 rounded-full relative flex align-middle"
            >
              <div class="mx-auto my-auto">
                <i :class="'text-white ' + item.icon"></i>
              </div>
            </div>
          </div>
          <!-- Heading -->
          <h5 class="text-center m-3 font-semibold text-sm md:text-base">
            {{ item.heading.toUpperCase() }}
          </h5>
          <!-- Text -->
          <p class="w-3/4 mx-auto text-xs text-center md:text-sm">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const serviceData = [
      {
        icon: "fa fa-wifi fa-lg",
        heading: "Wifi",
        text: "Free 100mbps wireless broadband connection",
      },
      {
        icon: "fa fa-cutlery fa-lg",
        heading: "Room Service",
        text: "Service from 7AM - 3PM daily",
      },
      {
        icon: "fa fa-refresh fa-lg",
        heading: "Laundry",
        text: "Express 1-day service is also available",
      },
      {
        icon: "fa fa-car fa-lg",
        heading: "Transfers",
        text: "Transfers to and from the airport",
      },
      {
        icon: "fa fa-motorcycle fa-lg",
        heading: "Scooter Rental",
        text: "Offering a wide selection",
      },
      {
        icon: "fa fa-info fa-lg",
        heading: "Concierge",
        text: "Ready to assist you 24/7",
      },
    ];

    return {
      serviceData,
    };
  },
};
</script>

<style></style>
