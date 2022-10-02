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
  function getRandomUpper() {
    if (promptUpperCase === true) {
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
      return upperCase[Math.floor(Math.random() * upperCase.length)];
    }
  }

  function getRandomLower() {
    if (promptLowerCase === true) {
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
  }

  function getRandomNumbers() {
    if (promptNumbers === true) {
      const numbers = "0123456789";
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
  }

  function getRandomSymbols() {
    if (promptSymbols === true) {
      const symbols = '!"#%&()*,./:;?@^_ {}~¡¦§';
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
  }
  // code for alert that informs user to at least choose one tup of characters if that didn't happen.
  if (!promptUpperCase && !promptLowerCase && !promptNumbers && !promptSymbols) {alert("Need to choose at least one option.")
    return generatePassword()
}
// creating an array out of all types of chosen and randomly picked character types in order to loop them according to the chosen password length. 
  var randomFunctions = [];
  if (promptUpperCase) {
    randomFunctions.push(getRandomUpper);
  };
  if (promptLowerCase) {
    randomFunctions.push(getRandomLower);
  };
  if (promptNumbers) {
    randomFunctions.push(getRandomNumbers);
  }if (promptSymbols) {
    randomFunctions.push(getRandomSymbols);
  };

//looping over the array of character types chosen in order to determine and generate the password:

  for (let index = 0; index < passwordLength; index++) {
      const randomFunction = randomFunctions[Math.floor(Math.random() * randomFunctions.length - 1)];
      generatedPassword += randomFunction;
    };
    return generatedPassword;

}

//console.log(getRandomUpper);
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
