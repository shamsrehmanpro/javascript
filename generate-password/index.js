const passwordBox = document.querySelector('input');
const passwordButton = document.querySelector('button');
const copyButton = document.querySelector('.fa-copy');

console.log(copyButton);

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialChar = "!@#$%^&*(){}[]?/<>" ;


const mixChar = upperCase + lowerCase + number + specialChar;


copyButton.addEventListener('click', function(){
    passwordBox.select();
    document.execCommand('copy');
});


function generatePassword(){

    let length = 12;
    let password = '';
    password += upperCase[Math.floor(upperCase.length * Math.random())];
    password += lowerCase[Math.floor(lowerCase.length * Math.random())];
    password += number[Math.floor(number.length * Math.random())];
    password += specialChar[Math.floor(specialChar.length * Math.random())];

    while (length > password.length) {
        
        password += mixChar[Math.floor(mixChar.length * Math.random())];
    }

    passwordBox.value = password;
    
}

passwordButton.addEventListener('click', function(){
    generatePassword();
});






