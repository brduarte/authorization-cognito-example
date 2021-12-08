import express from 'express';
import cors from 'cors';
import routers from '@shared/http/routes';
import errorMiddleware from '@shared/http/middleware/error.middleware';
import authorizationMiddleware from '@shared/http/middleware/authorization.middleware';

const app = express();

app.use(cors());

app.use(express.json());
app.use(authorizationMiddleware);
app.use(routers);
app.use(errorMiddleware);

export default app;
