var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["@", "$", "*", "!", "%", "&", "#", "?", ">", ".", "=", "+", "(", "-", ")", "<", "/", ";", "[", "]", ":", "{", "}", "|", '"', "'", "_"];

function randomChar(charSet) {
  var index = Math.floor(Math.random() * charSet.length);
  return charSet[index];
}

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (8-128 characters):");
  if (passLength < 8 || passLength > 128) {
    alert("Not valid entry. Must be between 8-128 characters. Please try again.:");
    return;
  }
  var includeLower = confirm("Would you like to include lowercase characters?:");
  var includeUpper = confirm("Would you like to include uppercase characters?:");
  var includeNum = confirm("Would you like to include numbers?:");
  var includeSpec = confirm("Would you like to include special characters?:");
  if (!includeLower && !includeUpper && !includeNum && !includeSpec) {
    alert("At least one of the options must be selected in order to generate password. Please try again.:")
    return;
  }

  var basket = []
  if (includeLower) {
    basket = basket.concat(lowercase)
  }
  if (includeUpper) {
    basket = basket.concat(uppercase)
  }
  if (includeNum) {
    basket = basket.concat(numeric)
  }
  if (includeSpec) {
    basket = basket.concat(specialChar)
  }

  var password = "";

  for (i = 0; i < passLength; i++) {
    var random = randomChar(basket)
    password = password + random;
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
