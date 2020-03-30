// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare all variables that can be used in the password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+'];


var passwordLength = prompt("How many characters long should the password be? (Between 8 and 128 characters")
//Variable from users response
var charAmount = parseInt(passwordLength)

//If statement to verify character input is a valid number, if not then alert is activated.
if (passwordLength < 8 || passwordLength > 128) {
  alert("Not a valid number.  Please enter a number between 8 and 128");
}

//List of confirmation statements that will determine which characters will be used
var confirmLower = confirm("Should the password include lowercase characters?");
var confirmUpper = confirm("Should the password include uppercase characters?");
var confirmNumber = confirm("Should the password include numbers?");
var confirmSpecial = confirm("Should the password include special characters?");

var possibleCharacters = [];


if (confirmLower === true) {
  possibleCharacters.push(lowerCase)
}
if (confirmUpper === true) {
  possibleCharacters.push(upperCase)
}
if (confirmNumber === true) {
  possibleCharacters.push(num)
}
if (confirmSpecial === true) {
  possibleCharacters.push(specialChar)
}


//randomly select a character from possibleCharacters array until total=charAmount
  

function generatePassword () {
  //need a for loop to go through the possible characters
  for (i=0; i<charAmount; i++) {
    var newPassword = possibleCharacters += charAmount
  }
  //convert the array "finalCharacters" into a string before returning
  return newPassword.join('')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

} 
