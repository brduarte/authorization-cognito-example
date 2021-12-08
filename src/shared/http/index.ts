import 'dotenv/config';
import app from '@shared/http/app';
import logger from '@shared/config/logger.config';

app.listen(process.env.PORT, () => {
  logger.info(`🤩 Server is running on port ${process.env.PORT}`);
});
