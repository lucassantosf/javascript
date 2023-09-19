const NodeRSA = require('node-rsa');

// Chave pública
const publicKey = new NodeRSA({
  n: 'p0EK3D+dpXrt+1icY1dlRevVFtfHBtkHysYPxE+oudEGxY3lxtCFYy+3jKTmPTEYw25eCNNNTKtIVnUNe0qkpQ==',
  e: 'AQAB',
});

// Chave privada
const privateKey = new NodeRSA({
  b: 512, // Tamanho da chave    |
  n: 'p0EK3D+dpXrt+1icY1dlRevVFtfHBtkHysYPxE+oudEGxY3lxtCFYy+3jKTmPTEYw25eCNNNTKtIVnUNe0qkpQ==',
  e: 'AQAB',
  d: 'NDW/mCVbps6K/40XtIMRoBQQPsM449BX+Fp/jX54Yxh1qXnSoZ9fsuB4AASNC4HCMn7vDlCkL8krAuzQ8EcfAQ==',
  p: '2v1cF0WjaeCfvlDBYA3D0yjJHGOBzcS7FGSnecCKbMU=',
  q: 'w4VURHAu0VoqupXnUKCDZjxnuI7SrkA4JS1xuuhslmE=',
  dmp1: 'waoqlRIq8GmMHB0CxtWlhsqdAJQnqTgAUoqpaY0TXhk=',
  dmq1: 'AWAVuKmFWsmklU1qpCGM6xIvtJekmb8v5esM6sCpyuE=',
  coeff: 'WFSaDVJn5kbiXKcRAdqUIEwJvGUYloE8ZpHUzHSLXLY=',
});

// // Texto que você deseja criptografar
// const plaintext = 'Este é um exemplo de texto a ser criptografado';

// // Criptografar o texto usando a chave pública
// const encrypted = publicKey.encrypt(plaintext, 'base64');

// console.log('Texto criptografado:', encrypted);

// Descriptografar o texto usando a chave privada
const decrypted = privateKey.decrypt('hQkrwe1jlaFC3MjzbzlLPZx2L9xvdOXxYEVzIUinMtuyLQeBb29n672ubY+W4H6zqpQlY38gyuQHIE/12oAVXQ==', 'base64');

console.log('Texto descriptografado:', decrypted);
//Este código utiliza as chaves públicas e privadas fornecidas para criptografar e descriptografar o texto. Certifique-se de que as chaves estejam corretamente configuradas no formato fornecido e mantenha a segurança das chaves privadas em um ambiente de produção.





