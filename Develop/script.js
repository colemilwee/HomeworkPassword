// Assignment Code
var generateBtn = document.querySelector("#generate");
var passTemp




// Write password to the #password input
function writePassword() {
  Prompts_for_password()

  var passwordText = document.querySelector("#password");

  passwordText.value = passTemp;

}

function Prompts_for_password() {
  var iscorrect = false
  while (iscorrect == false) {

    var p = parseInt(prompt("how long is your password"))
    if (p >= 8 && p <= 128) {
      iscorrect = true
    }
    else {
      alert("must enter a number between 8 and 128. You entered " + p)
    }
  }
  var u = confirm("Do you want to use Uppercase")
  var l = confirm("Do you want to use Lowercase")
  var s = confirm("Do you want to use Special letters")
  var n = confirm("Do you want to use Numbers")
  validator(p, u, l, s, n)
}




function validator(p, u, l, s, n) {

  if (u == true || l == true || s == true || n == true) {
    generatePassword(p, u, l, s, n)
  }
  else {
    alert("You must confirm one of the options")
    Prompts_for_password()
  }


}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generatePassword(passlength, isUp, isLo, isSpec, isNumb) {
  var charLower = 'qwertyuiopasdfghjklzxcvbnm'
  var charUpper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  var charSpec = '!@#$%^&*?_'
  var Numbers = '1234567890'
  passTemp = ''
  while (passTemp.length < passlength) {
    var a = getRandomInt(4)
    if (isUp == true && a == 0) {
      passTemp += charUpper.charAt(getRandomInt(25))
    }
    if (isLo == true && a == 1) {
      passTemp += charLower.charAt(getRandomInt(25))
    }
    if (isSpec == true && a == 2) {
      passTemp += charSpec.charAt(getRandomInt(9))
    }
    if (isNumb == true && a == 3) {
      passTemp += Numbers.charAt(getRandomInt(9))
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
