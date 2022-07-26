// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
function passwordLength() {
    let passLength = prompt("Please enter desired password length. It must be between 8 and 128 characters long.");
  if (passLength < 8){
    alert("Password must be at least 8 characters.");
    return "";
  }
  if (passLength > 128) {
    alert("Password may not exceed 128 characters.");
    return "";
  }
  else {
    console.log(`You want the password to be ${passLength} characters long`);
  }
  gencrit(passLength);
}




// Write password to the #password input
function gencrit(pwLength) {
  
  let password = "";
  let newPassword = "";

  var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var number = ("0123456789");
  var special = (" !#$%&'()*+,-./:;<=>?@[]^_`{|}~");


  let inputLowerCase = confirm("Do you want lower case letters in your password?");
  let inputUpperCase = confirm("Do you want upper case letters in your password?");
  let inputNumber = confirm("Do you want numbers in your password?");
  let inputSpecial = confirm("Do you want special characters in your password?");

  if (inputLowerCase == true) {
      newPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      password = password.concat(lowerCase);
      console.log("You want lower case values in your new password.");
  }


  if(inputUpperCase == true) {
    newPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password = password.concat(upperCase);
    console.log("You want upper case values in your new password.");
  }


  if(inputNumber == true) {
    newPassword += number.charAt(Math.floor(Math.random() * number.length));
    password = password.concat(number);
    console.log("You want numbers in your new password.");
  }


  if(inputSpecial == true) {
    newPassword += special.charAt(Math.floor(Math.random() * special.length));
    password = password.concat(special);
    console.log("You want special characters in your new password.");
  }



  if (inputLowerCase + inputUpperCase + inputNumber + inputSpecial < 1) {
    alert("You must pick at least one parameter for your new password.");
    return "";
  }



  for (var i = 0; i < pwLength; i++) {
    newPassword += password.charAt(Math.floor(Math.random() * password.length));
  }


  writePassword(newPassword);
  
}
 



function writePassword(pw) {
    var passwordText = document.querySelector("#password");
    passwordText.value = pw;
    console.log(`Your new password is ${pw}`);
  }


// Add event listener to generate button
  generateBtn.addEventListener("click", passwordLength);