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
  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Need to contact us?  Please provide us your details to get back to you in relation to your query ",
        },
      ],
    });
  },
};
</script>

<style></style>
