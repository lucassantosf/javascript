const CryptoJS = require('crypto-js');
const CryptoAES = require('crypto-js/aes')

// Cipher Text
// var cipherText = "This Text will be Encrypted using AES";
// console.log("Cipher Text : "+ cipherText);

// var key = "PasswordText";
// console.log("Key : "+ key);

// var encrptedText = CryptoJS.AES.encrypt(cipherText, key);
// console.log("Encrpted Text : "+ encrptedText.toString());
let iv = "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
iv = CryptoJS.enc.Utf8.parse(iv);

var salt = generateSalt()  

function generateSalt(){
    return CryptoJS.lib.WordArray.random(16).toString();
}

var cripted = CryptoJS.AES.encrypt('frase longa', salt);
var final_c = cripted.toString()

let decrypted = CryptoJS.AES.decrypt(final_c, salt, { iv: iv });

console.log('salt',salt);
console.log('crip',final_c);
console.log('decrypted',decrypted.toString(CryptoJS.enc.Utf8));