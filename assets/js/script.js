// Create arrays of different types of characters
// Uppercase letters
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Lowercase letters
const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Numbers
const numberCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
// Symbols
const specialCharacters = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "_",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "/",
  "?",
  ",",
  ".",
  "<",
  ">",
];

// Ask for user's desired password length between 8-12 characters

// Check length and that it's a number

// Ask if user wants to include each of the four types of characters
// Check that at least one option is selected

// Generate password based off choices when button clicked

// If user choice didn't meet requirements, this asks if they would like to try again or not
function tryAgain(choice) {
  if (choice) {
    userChoices();
  } else {
    alert("Generator canceled, refresh the page to start again.");
    return null;
  }
}

// Prompts for user to make selections for each option
function userChoices() {
  // User input for password length, 8-128 characters in length
  var length = prompt(
    "How many characters in your password? (between 8 - 128 characters)",
    10
  );

  // Checks if length is a number
  if (Number.isNaN(length)) {
    let choice = confirm("Password length must be a number.\nTry again?");
    tryAgain(choice);
  }

  // Checks length meets minimum requirements of >= 8
  if (length < 8) {
    let choice = confirm(
      "Password must be at least 8 characters long.\nTry again?"
    );
    tryAgain(choice);
  }

  // Checks length meets maximum requirements of <= 128
  if (length > 128) {
    let choice = confirm(
      "Password must be less than 128 characters long.\nTry again?"
    );
    tryAgain(choice);
  }

  // Ask if password should include uppercase letters
  var hasUpperLetters = confirm(
    "Click OK to include uppercase letters in your password.\nClick Cancel to not include uppercase letters."
  );

  // Ask if password should include lowercase letters
  var hasLowerLetters = confirm(
    "Click OK to include lowercase letters in your password.\nClick Cancel to not include lowercase letters."
  );

  // Ask if password should include numbers
  var hasNumbers = confirm(
    "Click OK to include numbers in your password.\nClick Cancel to not include numbers."
  );

  // Ask if password should include symbols
  var hasSpecial = confirm(
    "Click OK to include special characters in your password.\nClick Cancel to not include special characters."
  );

  // Check that at least one option was selected by the user
  if (
    hasUpperLetters === false &&
    hasLowerLetters === false &&
    hasNumbers === false &&
    hasSpecial === false
  ) {
    let choice = confirm(
      "At least one type of character must be selected.\nTry again?"
    );
    tryAgain(choice);
  }

  // Stores user choices into an object
  var choices = {
    length: length,
    hasUpperLetters: hasUpperLetters,
    hasLowerLetters: hasLowerLetters,
    hasNumbers: hasNumbers,
    hasSpecial: hasSpecial,
  };
  return choices;
}

// Gets random element from input array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomElement = arr[index];

  return randomElement;
}

// Generates password based off user choices
function generatePassword() {
  var choices = userChoices();

  // Check user choices to make sure they exist
  if (!choices) {
    alert("No options selected, please refresh page to start again.");
    return null;
  }

  
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
