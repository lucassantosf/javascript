// const axios = require('axios')
// const URL = 'http://swapi.dev/api/people'
// async function obterPessoas(nome){
    // const url = `${URL}/?search=${nome}&format=json`
    // const response = await axios.get(url)
    // return response.data
    // return true; }
// module.exports = {
//     obterPessoas: obterPessoas
// }
const CryptoJS = require('crypto-js');
const word = "018";

let key = "m+a0CfOJEzN0rbQFwY+gE1mYeW8k65e1";
key = CryptoJS.enc.Utf8.parse(key);

let iv = "1234567890123456";
iv = CryptoJS.enc.Utf8.parse(iv);

// let encrypted = CryptoJS.AES.encrypt(word, key, { iv: iv });
// encrypted = encrypted.toString();
encrypted = 'spgy/Fd7SbZF+oUwg+CBbQ==';
var b = Buffer.from(encrypted);
var string = b.toString('base64');

let decrypted = CryptoJS.AES.decrypt(string, key, { iv: iv });
// decrypted = decrypted.toString(CryptoJS.enc.Utf8);
console.log(`Descriptografado: ${decrypted}`);

 
const crypto = require('crypto');
const ENC_KEY = "m+a0CfOJEzN0rbQFwY+gE1mYeW8k65e1"; // set random encryption key
const IV = "5183666c72eec9e4";
// const phrase = "who let the dogs out";
// var encrypt = ((val) => {
//     let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
//     let encrypted = cipher.update(val, 'utf8', 'base64');
//     encrypted += cipher.final('base64');
//     return encrypted;
// });

var decrypt = ((encrypted) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
    let decrypted = decipher.update(encrypted, 'binary', 'utf8');
    return (decrypted + decipher.final('utf8'));
});
// encrypted_key = encrypt(phrase);
original_phrase = decrypt('spgy/Fd7SbZF+oUwg+CBbQ==');
console.log(`original_phrase: ${original_phrase}`);



// var keySize = 256;
// var iterations = 100;

// var message = "Hello World";
// var password = "Secret Password";


// var encrypted = encrypt(message, password);
// var decrypted = decrypt(encrypted, password);

// console.log('encrypted',encrypted);
// console.log('decrypted',decrypted);

// function decrypt (transitmessage, pass) {
//     var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
//     var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
//     var encrypted = transitmessage.substring(64);
    
//     var key = CryptoJS.PBKDF2(pass, salt, {
//         keySize: keySize/32,
//         iterations: iterations
//       });
  
//     var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
//       iv: iv, 
//       padding: CryptoJS.pad.Pkcs7,
//       mode: CryptoJS.mode.CBC
      
//     })
//     return decrypted;
// }

// function encrypt (msg, pass) {
//     var salt = CryptoJS.lib.WordArray.random(128/8);
    
//     var key = CryptoJS.PBKDF2(pass, salt, {
//         keySize: keySize/32,
//         iterations: iterations
//       });
  
//     var iv = CryptoJS.lib.WordArray.random(128/8);
    
//     var encrypted = CryptoJS.AES.encrypt(msg, key, { 
//       iv: iv, 
//       padding: CryptoJS.pad.Pkcs7,
//       mode: CryptoJS.mode.CBC
      
//     });
    
//     var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
//     return transitmessage;
// }