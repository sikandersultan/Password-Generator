// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var lowerCase;
var upperCase;
var numbers;
var characters;
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "/", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// apparently i just learned java is not good with capital letters inside a string so some googling later

var toUpper = function (x) {
  return x.toUpperCase();
};
upperCasechar = lowerCaseChar.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  length = prompt ("How long would you like your password to be? Accepted length is between 8 and 128.")
  if(length==0){
  alert("Please enter a value");
  }
  else if(length < 8 || length > 128) {
    lenght = prompt("You must choose between 8 and 128");
  }
  else {}
  
}