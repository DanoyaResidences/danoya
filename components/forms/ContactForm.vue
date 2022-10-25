<template>
  <div class="mx-auto w-10/12 my-24">
    <!-- Title -->
    <h1 class="text-center text-3xl font-serif">Contact Us</h1>
    <div class="h-[1px] bg-gray-400 w-24 mx-auto mt-3"></div>
    <div class="border-solid">
      <!-- Form -->
      <form
        class="mt-8 border-2 border-gray-300 rounded-md p-5"
        @change="validate"
      >
        <p
          class="mt-10 mb-4 text-xs md:text-base tracking-wider md:tracking-wide"
        >
          Please provide us your details to get back to you in relation to your
          query
        </p>

        <div class="flex flex-row flex-wrap">
          <!-- Name -->
          <div class="w-full sm:w-1/2 p-2">
            <div class="mb-4">
              <label for="name" class="text-sm">Name</label>

              <input
                v-model="form.name"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer"
                required
                id="name"
                name="name"
                placeholder="Name"
              />
              <!-- Validation text -->
              <p
                class="invisible peer-invalid:visible text-red-700 font-light text-xs"
              >
                Required
              </p>
            </div>
          </div>
          <!-- Email -->
          <div class="w-full sm:w-1/2 p-2">
            <label for="email" class="text-sm">Email</label>

            <input
              type="email"
              v-model="form.email"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer"
              required
              id="email"
              name="email"
              placeholder="Email"
            />
            <p
              class="invisible peer-invalid:visible text-red-700 font-light text-xs"
            >
              Please enter valid email address
            </p>
          </div>
          <!-- Telephone -->
          <div class="w-full sm:w-1/2 p-2">
            <label for="phone" class="text-sm">Phone number</label>

            <input
              type="tel"
              v-model="form.phone"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="phone"
              name="phone"
              placeholder="+62 xxx xxx xxxx"
            />
          </div>
          <!-- Purpose -->
          <div class="w-full sm:w-1/2 p-2">
            <label for="purpose" class="text-sm">Purpose</label>

            <select
              v-model="form.purpose"
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Enquiry type select"
              name="purpose"
            >
              <option value="general">General enquiry</option>
              <option value="resv-support">Reservation support</option>
              <option value="complaint">Complaint</option>
              <option value="business">Business</option>
            </select>
          </div>
          <!-- Message -->
          <div class="w-full sm:w-1/2 p-2">
            <label for="message" class="text-sm">Message</label>
            <textarea
              type="text"
              v-model="form.message"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer"
              required
              id="name"
              name="message"
              placeholder="Message"
            />
          </div>
          <!-- Submit button -->
          <div class="text-center pt-1 pb-1 sm:w-1/2 w-full my-auto">
            <button
              @click="submitForm()"
              class="inline-block px-6 py-2.5 hover:text-white text-gray-400 font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full md:w-2/3 mb-3 border-2"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const form = ref({
      email: "",
      name: "",
      phone: "",
      purpose: "general",
      message: "",
    });
    function submitForm() {
      console.log("submitting form", form.value);
    }
    function validate() {
      console.log("form change detected. Do something");
    }
    return {
      form,
      submitForm,
      validate,
    };
  },
};
</script>

<style></style>
