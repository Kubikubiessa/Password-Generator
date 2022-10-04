// Assignment code here

// Assignment Code

var generateBtn = document.querySelector("#generate");
//var characterTypes = '';
function generatePassword() {
  // this variable is left open, because the the selected random characters will be added to it at the end.
  let generatedPassword = "";
  //code creating the prompts, including the parameters of choices. If input incorrect, the return will make the function start over so that the user can input correct date.
  var input = window.prompt("Password length (8-128 characters): ");
  var passwordLength = parseInt(input);
  if (isNaN(passwordLength)) {
    window.alert("Not a number.");
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Password length must be between 8 and 128 characters. Try again."
    );
    return generatePassword();
  }
  var promptUpperCase = window.confirm(
    "Should your password include upper-case letters?"
  );
  var promptLowerCase = window.confirm(
    "Should your password include lower-case letters?"
  );
  var promptNumbers = window.confirm("Should your password include numbers?");
  var promptSymbols = window.confirm(
    "Should your password include special characters?"
  );

  //code for creating the selection of a random character of each character string when selected by user.

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lowerCase =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var symbols = ["!", "#", "%", "&", "(", ")", "*", "/", ":", ";", "?", "@", "^", "_",  "{", "}", "~", "¡", "¦", "§"];

  // code for alert that informs user to at least choose one tup of characters if that didn't happen.
  if (
    !promptUpperCase &&
    !promptLowerCase &&
    !promptNumbers &&
    !promptSymbols
  ) {
    alert("Need to choose at least one option.");
    return generatePassword();
  }

  // creating an array out of all types of chosen and randomly picked character types in order to loop them according to the chosen password length.
  var randomFunctions = [];
  var newPassword = [];
  if (promptUpperCase === true) {
    randomFunctions = randomFunctions.concat(upperCase);
    //randomFunctions.push(upperCase);
  }
  if (promptLowerCase === true) {
    randomFunctions = randomFunctions.concat(lowerCase);
    //randomFunctions.push(lowerCase);
  }
  if (promptNumbers === true) {
    randomFunctions = randomFunctions.concat(numbers);
    //randomFunctions.push(numbers);
  }
  if (promptSymbols === true) {
    randomFunctions = randomFunctions.concat(symbols);
    //randomFunctions.push(symbols);
  }

  //looping over the array of character types chosen in order to determine and generate the password:

  for (let i = 0; i < passwordLength; i++) {
    console.log(randomFunctions[Math.floor(Math.random() * randomFunctions.length - 1)])
    newPassword.push(randomFunctions[Math.floor(Math.random() * randomFunctions.length - 1)]);
  }
  generatedPassword = newPassword.join("");
  return generatedPassword;
}
/*function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}*/

/* var globalVar = "Hello";
// this is just a function that is immediately executed. this could be a for loop instead.
(function() {  
  // Concat to globalVar;
  globalVar += " World";
})();*/

//const finalPassword = generatedPassword.slice(0, length);

// Write password to the #password input
// Write password to the #password input
function writePassword(...args) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
