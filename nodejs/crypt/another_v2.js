const crypto = require('crypto');

const publicKeyPEM = `
-----BEGIN RSA PUBLIC KEY-----
p0EK3D+dpXrt+1icY1dlRevVFtfHBtkHysYPxE+oudEGxY3lxtCFYy+3jKTmPTEYw25eCNNNTKtIVnUNe0qkpQ==
-----END RSA PUBLIC KEY-----
`;

const privateKeyPEM = `
-----BEGIN RSA PRIVATE KEY-----
p0EK3D+dpXrt+1icY1dlRevVFtfHBtkHysYPxE+oudEGxY3lxtCFYy+3jKTmPTEYw25eCNNNTKtIVnUNe0qkpQ==
-----END RSA PRIVATE KEY-----
`;

const cryptoService = {
  encrypt: (decryptedString) => {
    if (!decryptedString) {
      throw new Error('decryptedString: É nulo ou vazio.');
    }

    const buffer = Buffer.from(decryptedString, 'utf-8');
    const encryptedData = crypto.publicEncrypt(
      {
        key: publicKeyPEM,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
      },
      buffer
    );

    return encryptedData.toString('base64');
  },

  decrypt: (encryptedString) => {
    if (!encryptedString) {
      throw new Error('encryptedString: É nulo ou vazio.');
    }

    const buffer = Buffer.from(encryptedString, 'base64');
    const decryptedData = crypto.privateDecrypt(
      {
        key: privateKeyPEM,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
      },
      buffer
    );

    return decryptedData.toString('utf-8');
  }
};

// module.exports = cryptoService;

// Exemplo de uso
const textoParaCriptografar = 'Hello, world!';
console.log('Texto original:', textoParaCriptografar);

const textoCriptografado = cryptoService.encrypt(textoParaCriptografar);
console.log('Texto criptografado:', textoCriptografado);

const textoDescriptografado = cryptoService.decrypt(textoCriptografado);
console.log('Texto descriptografado:', textoDescriptografado);