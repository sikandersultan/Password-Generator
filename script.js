// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowerCase;
var upperCase;
var numbers;
var characters;
var lowercasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "/", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// apparently i just learned java is not good with capital letters inside a string so some googling later

var toUpper = function (x) {
  return x.toUpperCase();
};
upperCasechar = lowerCase.map(toUpper);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
