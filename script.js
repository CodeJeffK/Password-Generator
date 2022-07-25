// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXZY");
var number = ("0123456789");
var special = (" !#$%&'()*+,-./:;<=>?@[]^_`{|}~");


// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = "";
  let inputLength = prompt("Please choose how long you would like your password to be. It must be between 8 and 128 characters long.");
  inputLength = parseInt(inputLength);

  if (inputLength < 8){
    alert("Password must be at leasst 8 characters.");
    return "";
  }
  if (inputLength > 128) {
    alert("Password may not exceed 128 characters.");
    return "";
  }
  var inputLowerCase = confirm("Do you want lower case letters in your password?");
  if (inputLowerCase) {
      passwordText += lowerCase;
  }
  var inputUpperCase = confirm("Do you want upper case letters in your password?");
  if(inputUpperCase) {
    passwordText += upperCase;
  }
  var inputNumber = confirm("Do you want numbers in your password?");
  if(inputNumber) {
    passwordText += number;
  }
  var inputSpecial = confirm("Do you want special characters in your password?");
  if(inputSpecial) {
    passwordText += special;
  }
  if (inputLowerCase + inputUpperCase + inputNumber + inputSpecial < 1) {
    alert("You must pick at least one parameter for your new password.");
    return "";
  }
  for (var i = 0; i <inputLength; i++) {
    password = passwordText [Math.floor(Math.random() * passwordText.length)];
  }

function newPassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
    passwordText.value = password;
}
}



// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);