import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(format.timestamp(), format.simple()),
    }),
  ],
});

export default logger;
