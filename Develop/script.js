// Assignment code here

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var input = window.prompt("Password length (8-128 characters): ");
  var passwordLength = parseInt(input);
  if (isNaN(passwordLength)) {
    window.alert("Not a number.");
    return;
  }
  
    if (passwordLength < 8 || passwordLength > 128){
      window.alert(
        "Password length must be between 8 and 128 characters. Try again."
      );
    return;
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

  if (promptUpperCase === true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  } 
   if (promptLowerCase === true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
    if (promptNumbers === true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
   if (promptSymbols === true) {
    const symbols = '!"#%&()*,./:;?@^_ {}~¡¦§';
    return symbols[Math.floor(Math.random() * symbols.length)];
    }
   }


// Create object out of all getRandom functions in order to loop them.
/*const getRandomValues = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumbers,
  symbol: getRandomSymbols,
};*/

function createPassword(upper, lower, number, symbol, length) {
  let generatedPassword = " ";
  const typesCount = upper + lower + number + symbol;
  const typesAr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) return " ";
}
for (let i = 0; i < length; i += typesCount) {
  typesAr.forEach((type) => {
    const funcName = Object.keys(type)[0];
    generatedPassword += getRandomValues[funcName]();
  });
}

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
