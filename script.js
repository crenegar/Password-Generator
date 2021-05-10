
// DEFINE VARABLES 
var caseArray = [];
var lowerCaseChar= ["a","b","c","d", "d","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar= ["!","@","#","@","#","$","%","^","&","*","(",")","{","}","[","]",",","<",">","?","/"];

// FUNCTION

function generatePassword() {

    var passwordString = "";


    var useLowerCase=confirm("Do you want to include lower case?");
    var useUpperCase=confirm("Do you want to include uppercase?");
    var useNumeric=confirm("Do you want to include numbers?");
    var useSpecial=confirm("Do you want to include special characters?");

    
    
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
        alert("Please confirm the character's type");

        useLowerCase=confirm("Do you want to include lower case?");
        useUpperCase=confirm("Do you want to include uppercase?");
        useNumeric=confirm("Do you want to include numbers?");
        useSpecial=confirm("Do you want to include special characters?");

    }

    

    var passwordLength = prompt("How many characters do you want for your password? Enter a number between 8 - 128");

    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number between 8 - 128");
        passwordLength=parseInt(prompt("How many characters do you want for your password? Password must be min 8 characters lenght"),
        )}

    

    if(useLowerCase == true){
        caseArray.push(lowerCaseChar);
    }
    if(useUpperCase == true){
        caseArray.push(upperCaseChar)
    }
    if(useNumeric == true){
        caseArray.push(numericChar)
    }
    if(useSpecial == true){
        caseArray.push(specialChar)
    }


 

    for(let i=0;i<passwordLength;i++){
        let randomCharArrayNum;
        let selectedCharArray;
        let randomCharNum;
        let randomChar;

       

        randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length)); 
        selectedCharArray=caseArray[randomCharArrayNum]; 
        
        randomCharNum=Math.floor(Math.random()*selectedCharArray.length);
        randomChar=selectedCharArray[randomCharNum];
        

        passwordString+=randomChar;
       
    }

   
    passwordEntry.textContent=passwordString;

}


let generateButton=document.getElementById("generate");
let passwordEntry=document.getElementById("password");
generateButton.onclick = generatePassword;


