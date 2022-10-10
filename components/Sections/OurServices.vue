<template>
  <div class="w-8/12 mx-auto">
    <div>
      <h1 class="mx-auto text-center">Our Services</h1>
    </div>
    <div class="flex flex-row flex-wrap">
      <div
        class="xl:w-1/3 w-1/2 p-12"
        v-for="(item, index) in serviceData"
        :key="'service-' + index"
      >
        <div class="flex align-middle m-3">
          <i :class="'mx-auto ' + item.icon"></i>
        </div>
        <h5 class="text-center m-3">{{ item.heading }}</h5>
        <p class="w-1/2 mx-auto text-sm text-center">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const serviceData = [
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "fa fa-bed fa-lg",
        heading: "Service Name",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ];

    return {
      serviceData,
    };
  },
};
</script>

<style></style>
