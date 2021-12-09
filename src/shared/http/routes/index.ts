import { Router, Request, Response } from 'express';

const routers = Router();

routers.get('/me', (req: Request, res: Response) => {
  const { session: { user } } = req;
  return res.json(user);
});

routers.get('/status', (req: Request, res: Response) => res.json({
  status: 'Aplicação online. 😛',
}));

export default routers;
