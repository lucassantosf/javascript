const moment = require("moment")
const CryptoJS = require("crypto-js");

var salt = generateSalt()                         //chave simétrica
var chave_to_backend = generateKey(salt);         //chave enviar backend

//1º gerar salt and backend chaves
console.log('salt',salt)
console.log('backend',chave_to_backend)
return true;

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

//2ºGerar criptografia no backend e copiar dados
//3ºColar valores abaixo para decriptografar
var DataEncrypt = "DqvcXkrPZPNVXWZ/EQ++tF6biizdA5mMtAqFCDQqH4s=";           //dado criptografado
var DataKey = CryptoJS.enc.Utf8.parse("0c1b5570dc4641e1f51abe9290f8eff6");  //salt
var DataVector = CryptoJS.enc.Utf8.parse("0000000000000000");
var decrypted = CryptoJS.AES.decrypt(DataEncrypt, DataKey, { iv: DataVector });        
var decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

console.log(decrypted);