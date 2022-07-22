const CryptoJS = require('crypto-js');
const encHex = require('crypto-js/enc-hex')
const aes = require('crypto-js/aes')
const padZeroPadding = require('crypto-js/pad-zeropadding')
const moment = require("moment")

var user_id = 3                                   
var salt = generateSalt()                         //salt
var chave_to_backend = generateKey(salt,user_id); //chave enviar backend

let key = encHex.parse(salt);
let iv =  encHex.parse("00000000000000000000000000000000");

function generateSalt(){
    return CryptoJS.lib.WordArray.random(16).toString();
}

function getRandomArbitrary() {
    return Math.floor(Math.random() * 100)
}

function generateKey(salt,user_id){ 
    var date = moment().format('YYYY-MM-DD HH:mm:ss');

    var random = getRandomArbitrary()
    var module = base_64(random)

    var secret_user = base_64(random*user_id)                                            

    var final = `${salt}.${date}.${module}.${secret_user}`                   
    return base_64(final);                                      
}

function base_64(text){
    const encodedWord = CryptoJS.enc.Utf8.parse(text);  
    return CryptoJS.enc.Base64.stringify(encodedWord);  
}

// Dados
let msg = "1234";
let msg2 = "307";

// Encrypt
let encrypted = aes.encrypt(msg, key, {iv, padding:padZeroPadding}).toString();
let encrypted2 = aes.encrypt(msg2, key, {iv, padding:padZeroPadding}).toString();

console.log('salt',salt)
console.log('backend',chave_to_backend)
console.log('encrypted',encrypted)
console.log('encrypted2',encrypted2)