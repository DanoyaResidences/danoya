<template>
  <div class="mx-auto w-10/12 my-24">
    <!-- Title -->
    <h1 class="text-center text-3xl font-serif">Contact Us</h1>
    <div class="h-[1px] bg-gray-400 w-24 mx-auto mt-3"></div>
    <div class="border-solid">
      <!-- Form -->
      <form class="mt-8 border-2 border-gray-300 rounded-md p-5">
        <p
          class="mt-10 mb-5 mx-auto md:w-2/3 leading-7 text-xs md:text-sm tracking-wider md:tracking-wide"
        >
          Thank you for visiting our website. If you have any inquiries or would
          like to provide feedback, please fill out the form below and we will
          respond to you as soon as possible.
        </p>

        <div class="flex flex-row flex-wrap">
          <!-- Name -->
          <div class="w-full sm:w-1/2 p-2">
            <div class="mb-4">
              <label for="name" class="text-sm">Name</label>

              <input
                v-model="form.name"
                @change="validateField('name', true)"
                :class="inputBorderOutlineValidate('name')"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer"
                required
                id="name"
                name="name"
                placeholder="Name"
              />
              <p class="text-red-700 font-light text-xs">
                {{ errorMessages.name }}
              </p>
            </div>
          </div>
          <!-- Email -->
          <div class="w-full sm:w-1/2 p-2">
            <label for="email" class="text-sm">Email</label>

            <input
              type="email"
              v-model="form.email"
              @change="validateField('email', true)"
              :class="inputBorderOutlineValidate('email')"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer"
              required
              id="email"
              name="email"
              placeholder="Email"
            />
            <p class="text-red-700 font-light text-xs">
              {{ errorMessages.email }}
            </p>
          </div>
          <!-- Telephone -->
          <div class="w-full sm:w-1/2 p-2">
            <label for="phone" class="text-sm">Phone number</label>

            <input
              type="tel"
              v-model="form.phone"
              @change="validateField('phone', false)"
              :class="inputBorderOutlineValidate('phone')"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="phone"
              name="phone"
              placeholder="+62 xxx-xxx-xxxx"
            />
            <p class="text-red-700 font-light text-xs">
              {{ errorMessages.phone }}
            </p>
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
              @change="validateField('message', true)"
              :class="inputBorderOutlineValidate('message')"
              required
              id="name"
              name="message"
              placeholder="Message"
            />
            <div class="flex flex-row">
              <div class="w-1/2">
                <p class="text-red-700 font-light text-xs">
                  {{ errorMessages.message }}
                </p>
              </div>
              <span
                :class="
                  currentMessageCount <= 250
                    ? 'w-1/2 text-right font-light text-xs'
                    : 'w-1/2 text-right font-light text-xs text-red-600'
                "
                >{{ currentMessageCount }}/250</span
              >
            </div>
          </div>
          <!-- Submit button -->
          <div class="text-center pt-1 pb-1 sm:w-1/2 w-full my-auto">
            <button
              @click="submitForm()"
              :class="buttonClassBasedOnForm"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <i
                v-if="loading"
                :class="'text-blue-400 fa fa-lg fa-spinner animate-spin'"
              ></i>
              <div v-if="!loading">
                {{ submitButtonText }}
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import validation from "./validation";
import axios from "axios";
export default {
  setup() {
    // Variable to record form input
    const form = ref({
      email: "",
      name: "",
      phone: "",
      purpose: "general",
      message: "",
    });

    // Validation list for each field
    const validationOptions = ref({
      email: [validation.isEmail],
      name: [],
      phone: [validation.isPhoneNumber],
      purpose: [],
      message: [validation.isLessThan250Chars],
    });

    // Error messages
    const errorMessages = ref({
      email: "",
      name: "",
      phone: "",
      purpose: "",
      message: "",
    });

    // Submit button text
    const submitButtonText = ref("submit");

    // Computed properties
    //
    // Current message count
    const currentMessageCount = computed(() => {
      return form.value.message.length;
    });

    // Checks if errorMessages contains any errors
    // Returns boolean
    const isFormValid = computed(() => {
      // Iterate through error messages
      for (const errorField in errorMessages.value) {
        // If the current field's value is empty
        if (errorMessages.value[errorField] != "") {
          return false;
        }
      }
      // Return true if no error found
      return true;
    });

    // Functions
    //
    const loading = ref(false);
    // Submits form
    async function postFormToFormspree() {
      loading.value = true;
      // Call api
      const response = await axios.post("https://formspree.io/f/xdojjoko", {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        purpose: form.value.purpose,
        message: form.value.message,
        _subject: `${form.value.purpose} | Message from Danoya website`,
        _replyto: form.value.email,
        _name: form.value.firstname,
      });

      if (response.status === 200) {
        // Reset form
        form.value.name = "";
        form.value.email = "";
        form.value.phone = "";
        form.value.purpose = "";
        form.value.message = "";

        // Stop loading
        loading.value = false;
        // Set message
        messageButtonMessage("Success!");
      } else {
        // Stop loading
        loading.value = false;
        // Set message
        messageButtonMessage("Failed!");
      }
    }

    // Set messagebutton text message
    function messageButtonMessage(text) {
      // Set new message
      submitButtonText.value = text;
      // After 3 seconds set to old message
      setTimeout(() => {
        submitButtonText.value = "submit";
      }, 3000);
    }
    // Checks whether a field is valid to apply border CSS
    function inputBorderOutlineValidate(field) {
      // If error message empty
      if (errorMessages.value[field] !== "") {
        return "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer border-red-500";
        // Else return failed class
      } else {
        return "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer";
      }
    }

    // Builds the required button class based on form validity and
    // whether or not form submission is loading
    const buttonClassBasedOnForm = computed(() => {
      // Build base class
      let cssClass =
        "inline-block px-6 py-2.5 hover:text-white text-gray-400 font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full md:w-2/3 mb-3 border-2";

      // Depending on form validity indicate whether valid or not
      if (!isFormValid.value) {
        // Indicate invalid
        cssClass = cssClass + " hover:bg-red-300";
      } else {
        // Indicate valid
        cssClass = cssClass + " hover:bg-blue-300";
      }

      // If it's loading add different background
      if (loading.value) {
        cssClass = cssClass + " bg-blue-300";
      }

      return cssClass;
    });

    // Submission click handler for form submission
    async function submitForm() {
      // Validate all the fields
      validateAllFields();
      if (isFormValid.value) {
        // post to server
        await postFormToFormspree();
      }
    }

    // Validates the specified name of the field within the contact form
    function validateField(field, isRequiredField) {
      // Grab current value of field to validate
      const currentFieldValue = form.value[field];

      // validate the current field value using the validation options of the associated field
      // and whether field is required or not
      const resultOrError = validation.validate(
        currentFieldValue,
        validationOptions.value[field],
        isRequiredField
      );

      // Set error message to result
      errorMessages.value[field] = resultOrError;
    }

    // Validates all fields that require validation
    function validateAllFields() {
      // Validate fields with name
      validateField("email", true);
      validateField("name", true);
      validateField("phone", false);
      validateField("message", true);
    }

    return {
      form,
      submitForm,
      validateField,
      errorMessages,
      currentMessageCount,
      isFormValid,
      inputBorderOutlineValidate,
      submitButtonText,
      loading,
      buttonClassBasedOnForm,
    };
  },
};
</script>

<style></style>
