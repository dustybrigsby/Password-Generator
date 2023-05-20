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
const symbolCharacters = [
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

var generateBtn = document.querySelector("#generate");

// Prompts for user to make selections for each option
function userChoices() {
  // User input for password length, 8-128 characters in length
  var length = prompt(
    "How many characters in your password? (between 8 - 128 characters)",
    10
  );

  // Checks if length is a number
  if (Number.isNaN(length)) {
    let tryAgain = confirm(
      "Password length must be a number.\nTry again?"
    );

    if (tryAgain) {
      userChoices();
    } else {
      return null;
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
