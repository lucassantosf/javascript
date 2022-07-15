const moment = require("moment")
const CryptoJS = require("crypto-js");

var user_id = 3
var salt = generateSalt()                         //chave simétrica
var chave_to_backend = generateKey(salt,user_id); //chave enviar backend

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

//2ºGerar criptografia no backend e copiar dados
//3ºColar valores abaixo para decriptografar
var DataEncrypt = "pceAC6oMunwdYlJD+l9P+whH7pwIQilzbi+g6lgpaOs=";           //dado criptografado
var DataKey = CryptoJS.enc.Utf8.parse("6be23f128014172ac95a054f970b153c");  //salt
var DataVector = CryptoJS.enc.Utf8.parse("0000000000000000");
var decrypted = CryptoJS.AES.decrypt(DataEncrypt, DataKey, { iv: DataVector });        
var decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

console.log(decrypted);