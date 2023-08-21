const CryptoJS = require('crypto-js');

let key = "N2UwOWRkMjY1ODczZTY4NmI2ZTcxY2ViYTdhNDhhYjMuMjAyMy0wOC0yMSAxNjoyMzo1Mw==";
key = CryptoJS.SHA256(key);
let iv = "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
iv = CryptoJS.enc.Utf8.parse(iv);

let encrypted  = 'YZrPljtLqmtBiDPDSg24w==';
let decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv });

console.log(`Descriptografado: ${decrypted.toString(CryptoJS.enc.Utf8)}`);