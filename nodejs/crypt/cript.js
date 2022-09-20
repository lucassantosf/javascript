const CryptoJS = require('crypto-js');
const encHex = require('crypto-js/enc-hex')
const aes = require('crypto-js/aes')
const padZeroPadding = require('crypto-js/pad-zeropadding')
const moment = require("moment")

var user_id = 8                                   
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

function generateKey(salt){ 
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    var final = `${salt}.${date}`                   
    return base_64(final);                                      
}

function base_64(text){
    const encodedWord = CryptoJS.enc.Utf8.parse(text);  
    return CryptoJS.enc.Base64.stringify(encodedWord);  
}

// Dados
let msg = "11223344";
let msg2 = "1234";

// Encrypt
let encrypted = aes.encrypt(msg, key, {iv, padding:padZeroPadding}).toString();
let encrypted2 = aes.encrypt(msg2, key, {iv, padding:padZeroPadding}).toString();

console.log('salt',salt)
console.log('backend',chave_to_backend)
console.log('encrypted',encrypted)
console.log('encrypted2',encrypted2)