import { NextFunction, Request, Response } from 'express';
import { Error } from '@shared/http/exceptions/error.exeption';
import logger from '@shared/config/logger.config';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(err.statusCode).json({
      status: 'Error',
      message: err.message,
    });
  }

  logger.error(err);

  return res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
};

export default errorMiddleware;
