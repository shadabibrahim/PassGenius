let passwordBox = document.getElementById('password');
let length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacters = "@#$%&*()_-+=?/|~`";
const allChars = upperCase + lowerCase + number + specialCharacters;

function generatePassword() {
    let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
      }
   passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}
document.querySelector('button').addEventListener('click',generatePassword);
document.querySelector('#copy').addEventListener('click',copyPassword);


