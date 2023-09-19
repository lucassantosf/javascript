const crypto = require('crypto');

const publicKeyXML = `
<RSAKeyValue>
  <Modulus>p0EK3D+dpXrt+1icY1dlRevVFtfHBtkHysYPxE+oudEGxY3lxtCFYy+3jKTmPTEYw25eCNNNTKtIVnUNe0qkpQ==</Modulus>
  <Exponent>AQAB</Exponent>
</RSAKeyValue>
`;

const privateKeyXML = `
<RSAKeyValue>
  <Modulus>p0EK3D+dpXrt+1icY1dlRevVFtfHBtkHysYPxE+oudEGxY3lxtCFYy+3jKTmPTEYw25eCNNNTKtIVnUNe0qkpQ==</Modulus>
  <Exponent>AQAB</Exponent>
  <P>2v1cF0WjaeCfvlDBYA3D0yjJHGOBzcS7FGSnecCKbMU=</P>
  <Q>w4VURHAu0VoqupXnUKCDZjxnuI7SrkA4JS1xuuhslmE=</Q>
  <DP>waoqlRIq8GmMHB0CxtWlhsqdAJQnqTgAUoqpaY0TXhk=</DP>
  <DQ>AWAVuKmFWsmklU1qpCGM6xIvtJekmb8v5esM6sCpyuE=</DQ>
  <InverseQ>WFSaDVJn5kbiXKcRAdqUIEwJvGUYloE8ZpHUzHSLXLY=</InverseQ>
  <D>NDW/mCVbps6K/40XtIMRoBQQPsM449BX+Fp/jX54Yxh1qXnSoZ9fsuB4AASNC4HCMn7vDlCkL8krAuzQ8EcfAQ==</D>
</RSAKeyValue>
`;

const convertXmlToPem = (xmlString, isPublic) => {
  const keyType = isPublic ? 'RSA PUBLIC KEY' : 'RSA PRIVATE KEY';
  const base64Data = xmlString.match(/Modulus>([\s\S]*?)<\/Modulus/)[1];
  const dataBuffer = Buffer.from(base64Data, 'base64');
  const pemKey = `-----BEGIN ${keyType}-----\n${dataBuffer.toString('base64')}\n-----END ${keyType}-----`;
  return pemKey;
};

const publicKeyPEM = convertXmlToPem(publicKeyXML, true);
const privateKeyPEM = convertXmlToPem(privateKeyXML, false);

console.log(privateKeyPEM)