const listClients = process.env.AWS_COGNITO_ALLOW_CLIENTS as string;

const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID as string,
  Region: process.env.AWS_COGNITO_REGION as string,
  AllowClients: listClients.split(','),
  Issuer: `https://cognito-idp.${process.env.AWS_COGNITO_REGION}.amazonaws.com/${process.env.AWS_COGNITO_USER_POOL_ID}`,
  JwksUri: `https://cognito-idp.${process.env.AWS_COGNITO_REGION}.amazonaws.com/${process.env.AWS_COGNITO_USER_POOL_ID}/.well-known/jwks.json`,
};

export default poolData;
