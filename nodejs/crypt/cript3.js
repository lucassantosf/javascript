const aes = require('crypto-js/aes')
const encHex = require('crypto-js/enc-hex')
const padZeroPadding = require('crypto-js/pad-zeropadding')

// message to encrypt
let msg = "Hello world";

// the key and iv should be 32 hex digits each, any hex digits you want, but it needs to be 32 on length each
let key = encHex.parse("0123456789abcdef0123456789abcdef");
let iv =  encHex.parse("abcdef9876543210abcdef9876543210");

// encrypt the message
let encrypted = aes.encrypt(msg, key, {iv:iv, padding:padZeroPadding}).toString();
console.log('e',encrypted)