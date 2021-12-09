import { Request, Response, NextFunction } from 'express';
import { CheckToken } from '@shared/sso/services/CheckToken';
import { UserDto } from '@shared/sso/dto/user.dto';

const authorizationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: 'Required authorization token',
      });
    }

    const checkToken = new CheckToken();
    const { sub: id, email, phone_number: phoneNumber } = await checkToken.run(token);

    req.session.user = {
      id,
      email,
      phoneNumber,
    } as UserDto;

    next();
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default authorizationMiddleware;
