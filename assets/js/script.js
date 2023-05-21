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

// Prompts for user to make selections for each option
function userChoices() {
  // User input for password length, 8-128 characters in length
  var length = prompt(
    "How many characters in your password? (between 8 - 128 characters)",
    10
  );

  // Checks if length is a number
  if (Number.isNaN(length)) {
    let choice = alert(
      "Password length must be a number.\nClick Generate Password to try again."
    );
    return null;
  }

  // Checks length meets minimum requirements of >= 8
  if (length < 8) {
    let choice = confirm(
      "Password must be at least 8 characters long.\nClick Generate Password to try again."
    );
    return null;
  }

  // Checks length meets maximum requirements of <= 128
  if (length > 128) {
    let choice = confirm(
      "Password must be less than 128 characters long.\nClick Generate Password to try again."
    );
    return null;
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
      "At least one type of character must be selected.\nClick Generate Password to try again."
    );
    return null;
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
  // Get user choices for password criteria
  var choices = userChoices();
  // Make array of all possible chars to include based off user choices
  var possibleChars = [];
  // Make array of chars that must be included
  var needChars = [];
  // How many options were selected by user
  var count = 0;
  // Generated password
  var password = [];

  // console.log(choices);

  // Check user choices to make sure they exist
  if (!choices) {
    alert("No options selected, please try again.");
    return null;
  }

  // Check for characters user chose to include in password
  if (choices.hasUpperLetters) {
    possibleChars = possibleChars.concat(upperCaseLetters);
    needChars.push(getRandom(upperCaseLetters));
    count++;
  }
  if (choices.hasLowerLetters) {
    possibleChars = possibleChars.concat(lowerCaseLetters);
    needChars.push(getRandom(lowerCaseLetters));
    count++;
  }
  if (choices.hasNumbers) {
    possibleChars = possibleChars.concat(numberCharacters);
    needChars.push(getRandom(numberCharacters));
    count++;
  }
  if (choices.hasSpecial) {
    possibleChars = possibleChars.concat(specialCharacters);
    needChars.push(getRandom(specialCharacters));
    count++;
  }

  // Iterate through the password length adding randomly from possibleChars
  for (let i = 0; i < choices.length - count; i++) {
    let char = getRandom(possibleChars);
    password.push(char);
  }

  // console.log(needChars);
  // console.log(password);

  // Add required characters to password to ensure at least one of each is included
  password = password.concat(needChars);

  // console.log(password);

  // Turn password array into string
  return password.join("");
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
