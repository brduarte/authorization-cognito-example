import { JwtRsaVerifier } from 'aws-jwt-verify';
import cognito from '@shared/config/cognito.config';
import { Error } from '@shared/http/exceptions/error.exeption';
import logger from '@shared/config/logger.config';

export class CheckToken {
  async run(token: string) {
    try {
      const verifier = JwtRsaVerifier.create({
        issuer: cognito.Issuer,
        audience: cognito.AllowClients,
        jwksUri: cognito.JwksUri,
      });

      return await verifier.verify(token);
    } catch (error) {
      logger.error('CheckToken JWT', JSON.stringify(error));
      throw new Error('Invalid token', 401);
    }
  }
}
