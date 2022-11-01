import validator from "validator";

// Checks if parameter string is an email
function isEmail(string) {
  if (validator.isEmail(string)) {
    return "";
  } else {
    return "Please enter valid email";
  }
}

// Checks if parameter string is less than 250 characters
function isLessThan250Chars(string) {
  if (string.length <= 250) {
    return "";
  } else {
    return "Must be max of 250 characters";
  }
}

// Checks if parameter string is a phone number
function isPhoneNumber(string) {
  // Init string var
  let stringToTest = string;

  // Edit string var based on if it starts with +
  if (stringToTest[0] == "+") {
    // Remove +
    stringToTest = stringToTest.slice(1);
  }
  // Check if string is numeric
  if (validator.isNumeric(stringToTest)) {
    return "";
  } else {
    return "Must be a phone number";
  }
}

// Takes in the current string form field value
function validate(currentFieldValue, arrayOfValidations, requiredField) {
  // Store the last result (true | error)
  let lastRecordedResult = "";

  //  if current field value is empty
  if (currentFieldValue == "") {
    // Return error if required
    if (requiredField) {
      return "Required";
      //   Else return empty
    } else {
      return "";
    }
  }

  // Else proceed to check other validations
  //   Iterate through array of validation functions
  arrayOfValidations.forEach((validationFunction) => {
    // Use function and store result
    const result = validationFunction(currentFieldValue);

    // if last result is empty and the generate result is not empty
    if (lastRecordedResult == "" && result !== "") {
      // Update the last recorded result with result
      lastRecordedResult = result;
      console.log(
        `current: ${currentFieldValue}. result: ${result}. now lastRecorded result is: ${lastRecordedResult} `
      );
    }
  });

  return lastRecordedResult;
}

export default {
  isEmail,
  isPhoneNumber,
  validate,
  isLessThan250Chars,
};
