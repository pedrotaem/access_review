import { Router } from 'express';
import accessRouter from './access.routes';

const routes = Router();

routes.use('/accesses', accessRouter);

export default routes;
