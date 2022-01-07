// Assignment Code
var generateBtn = document.querySelector("#generate");

var createdPassword;
var length;
var lowerCase;
var upperCase;
var numbers;
var characters;
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "/", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
//to keep track of what the user chose, didnt think that
var choice;
// apparently i just learned java is not good with capital letters inside a string so some googling later

var toUpper = function (x) {
  return x.toUpperCase();
};
var upperCaseChar = lowerCaseChar.map(toUpper);

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
  else {
    lowerCase = confirm("Would you like lowercase letters in your password?")
    upperCase = confirm("Would you like uppercase letters in your password?")
    numbers = confirm("Would you like numbers in your password?")
    characters = confirm("Would you like special characters in your password?")
  }

  if (!lowerCase && !upperCase && !numbers && !specialChar) {
    choice = alert("I cant make you a password with literally nothing :|")
  }
  else if (lowerCase && upperCase && numbers && characters) {
    choice = lowerCaseChar.concat(upperCaseChar, numbersChar, specialChar)
  }
  else if (lowerCase && upperCase && numbers) {
    choice = lowerCaseChar.concat(upperCaseChar, numbersChar)
  }
  else if (lowerCase && upperCase && characters) {
    choice = lowerCaseChar.concat(upperCaseChar, specialChar)
  }
  else if (upperCase && numbers && characters) {
    choice = upperCaseChar.concat(numbersChar, specialChar)
  }
  else if (lowerCase && upperCase) {
    choice = lowerCaseChar.concat(upperCaseChar)
  }
  else if (lowerCase && numbers) {
    choice = lowerCaseChar.concat(numbersChar)
  }
  else if (lowerCase && characters) {
    choice = lowerCaseChar.concat(specialChar)
  }
  else if (upperCase && numbers) {
    choice = upperCaseChar.concat(numbersChar)
  }
  else if (upperCase && characters) {
    choice = upperCaseChar.concat(specialChar)
  }
  else if (numbers && characters) {
    choice = specialChar.concat(numbersChar)
  }
  else if (lowerCase) {
    choice = lowerCaseChar
  }
  else if (upperCase) {
    choice = upperCaseChar
  }
  else if (numbers) {
    choice = numbersChar
  }
  else if (characters) {
    choice = specialChar
  }
  console.log(choice)

  
  
  for (var i = 0; i < length; i++) {
    var createdPassword = choice[Math.floor(Math.random() * choice.length)]

    console.log(createdPassword)
  }
  var passwordText = createdPassword.join("");
  return passwordText
}
