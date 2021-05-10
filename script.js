var caseArray = [];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = ["1”,“2","3”,“4","5”,“6","7”,“8","9”,“0"];
var specialChar = ["!", "@","#","$","%","^","&","*"];


function generatePassword() {
  
  var passwordString = "";
  var passwordLength = confirm("How many characters fo you want the password to be? The password cannot be less than 8 and no more than 128 characters.");
  var useLowerCase = confirm("Do you want to include lowercaase characters?");
  var useUpperCase = confirm("Do you want to incude uppercase characters?");
  var useNumeric = confirm("Do you want to include numeric characters?");
  var useSpecial = confirm("Do you want to include special characters?");

  if (useLowerCase == true) {
    caseArray.push(lowerCaseChar)
  }
  if (useUpperCase == true) {
    caseArray.push(upperCaseChar)
  }
  if (useNumeric == true) {
    caseArray.push(numericChar);
  }
  if (useSpecial == true) {
    caseArray.push(specialChar)
  }
  for (let i = 0; i < passwordLength; i++) {
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomChar;
  }
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
      alert("please select one type of character");
      useLowerCase = confirm("Do you want to include lowercase characters?");
      useUpperCase = confirm("Do you want to include uppercase characters?");
      useNumeric = confirm("Do you want to use numeric characters?");
      useSpecial = confirm("Do you want to include special characters?");
    }

    var passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 and no more than 128 characters."));
    while (passwordLength < 8 || passwordLength > 128 || typeof (passwordLength) != "number" || passwordLength === Nan || PasswordLength === null) {}
    alert("Please choose a number that is more than 8 and less than 128 characters");
     passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    

     randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length));
     selectedCharArray = caseArray[randomCharArrayNum];
     randomCharNum = Math.floor(Math.random() * selectedCharArray.length); 
     randomChar = selectedCharArray[randomCharNum];

     passwordString += randomChar;
     passwordEntry.textContent = passwordString;

    } generatePassword()

  


var generateButton = document.getElementById("generateButton");
var passwordEntry = document.getElementById("passwordEntry");
generateButton.onclick = generatePassword;






