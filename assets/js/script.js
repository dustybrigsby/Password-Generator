// Create arrays of different types of characters

// Uppercase letters
// Lowercase letters
// Numbers
// Symbols

// Ask for user's desired password length between 8-12 characters
  // Check length and that it's a number

// Ask if user wants to include each of the four types of characters
  // Check that at least one option is selected

// Generate password based off choices when button clicked

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
