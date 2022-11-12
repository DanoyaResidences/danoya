<template>
  <div>
    <nav-bar-top />
    <nav-bar-bottom />
    <TopParallax
      heading="Contact"
      subHeading="Reach out to us"
      imagePath="/images/headers/contact_parallax.jpeg"
    />
    <contact-form />
    <Footer />
  </div>
</template>

<script>
import ContactForm from "../components/forms/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style></style>
