<template>
  <div>
    Sorry! An error was encountered while loading the page
    <button @click="handleError">Return to home</button>
  </div>
</template>

<script>
export default {
  setup() {
    const props = defineProps({ error: Object });
    const handleError = () => clearError({ redirect: "/" });

    return {
      handleError,
    };
  },
};
</script>

<style scoped></style>
