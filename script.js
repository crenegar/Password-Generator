// Generate password function
var plength = prompt("How many characters does your password need? Please pick a number between 8 and 128.");

while (plength < 8 || plength > 128) {
  plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
}

var uppercase = confirm("Would you like to use uppercase letters?");
console.log(uppercase);

var lowercase = confirm("Would you like to use lowercase letters?");
console.log(lowercase);

var numbers = confirm("Would you like to use numbers?");
console.log(number);

var symbols = confirm("Would you like to use special characters?");
console.log(symbols);

while (!(uppercase || lowercase || number || symbols)) {
  alert("You must select at least one character type");

  uppercase = confirm("Would you like to use uppercase letters?");
  lowercase = confirm("Would you like to use lowercase letters?");
  numbers = confirm("would you like to use numbers?");
  symbols = confirm("would you like to use special characters?");
}

var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var special = ["!", "@" ,"#", "$", "%", "^", "&", "*"];

// Get references to the #generate element
generateBtn.addEventListener("click", () => {
  let characters = lowercase;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += special) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

var generateBtn = document.querySelector("generate");
var result = document.querySelector("h2");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




