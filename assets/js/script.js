//  My Global variables
var pwLength = "";
var password = "";
var chars = "";
var gChars = "";
var upperCasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCasechars = "abcdefghijklmnopqrstuvwxyz";
var numbersChars = "0123456789";
var specialChars = "!@#$%^&*()";

//     user input, password length
function pwPrompt(){
  pwLength = prompt('How Long Would You Like Your Password?');
  //validate answer is between 8 and 128
  if (pwLength < 8 || pwLength > 128){
    window.alert("Password must be between 8 and 128 in length");
    pwPrompt();
  }if (isNaN(pwLength)) {
    window.alert("Password must be a number");
    return pwPrompt();}
}

function casePick1(){
  var casePickU = "";
  casePickU = prompt('Would You Like to Include Uppercase? (yes or no)')
  casePickU = casePickU.toLowerCase();
  if (casePickU === "yes") {
    var randoNum = Math.floor(Math.random() * upperCasechars.length);
    chars += upperCasechars;
    gChars += upperCasechars.charAt(randoNum);
  }else if (casePickU === "no"){
    chars = chars;
  }else {
  window.alert("Must be entered as 'yes' or 'no'");
   casePick1();
}
}

function casePick2(){
  var casePickL = "";
  casePickL = prompt('Would You Like To Include Lowercase? (yes or no)')
  casePickL = casePickL.toLowerCase();
if (casePickL === "yes") {
  var randoNum = Math.floor(Math.random() * lowerCasechars.length);
  chars += lowerCasechars;
  gChars += lowerCasechars.charAt(randoNum);
}else if (casePickL === "no"){
  chars = chars;
}else {
  window.alert("Must be entered as 'yes' or 'no'");
   casePick2();
}
}

function specialPick1(){
  var specialPick = "";
  specialPick = prompt('Would You Like To Include "numbers"? (yes or no)')
  specialPick = specialPick.toLowerCase();
if (specialPick === "yes") {
  var randoNum = Math.floor(Math.random() * numbersChars.length);
  chars += numbersChars;
  gChars += numbersChars.charAt(randoNum);
}else if (specialPick === "no"){
  chars = chars;
}else {
  window.alert("Must be entered as 'yes' or 'no'");
  specialPick1();
}
}

function specialPick2(){
  var specialPick = "";
  specialPick = prompt('Would You Like To Include Special Characters (special)? (yes or no)')
  specialPick = specialPick.toLowerCase();
if (specialPick === "yes") {
  var randoNum = Math.floor(Math.random() * specialChars.length);
  chars += specialChars;
  gChars += specialChars.charAt(randoNum);
}else if (specialPick === "no"){
  chars = chars;
}else {
  window.alert("Must be entered as 'yes' or 'no'");
  specialPick2();
}
}

function failSafe(){
  var failSafe1 = gChars.length;
  if (failSafe1 < 1) {
    window.alert('You Must Pick At Least One!');
    generatePassword();
  }
}

function generatePassword() {
  password = "";
  pwPrompt();
  casePick1();
  casePick2();
  specialPick1();
  specialPick2()
  failSafe();
  var allChars = (pwLength - gChars.length);
  for (var i = 0; i <= allChars; i++) {
    var randoNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randoNum, randoNum + 1);
  };
  password += gChars;
//Vallidating your password
  return password
}

function createPass() {
  password = "";
  var allChars = (pwLength - gChars.length);
  for (var i = 0; i <= allChars; i++) {
    var randoNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randoNum, randoNum + 1);
};
password += gChars;
password();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);