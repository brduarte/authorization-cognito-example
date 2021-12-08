import { UserDto } from '@shared/sso/dto/user.dto';

declare global{
  namespace Express {
    interface Request {
      session: {
        user: UserDto;
      };
    }
  }
}
