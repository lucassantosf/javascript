const CryptoJS = require('crypto-js');

let key = "#key_to_decrypt";
key = CryptoJS.SHA256(key);
let iv = "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
iv = CryptoJS.enc.Utf8.parse(iv);

let encrypted  = 'DjzhaVnKRMIZxblsnnUeqlnNKn0cE629cOI5Bj9o2yA=';
let decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv });

console.log(`Descriptografado: ${decrypted.toString(CryptoJS.enc.Utf8)}`);