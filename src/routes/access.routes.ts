import { Router } from 'express';
import AccessesRepository from '../repositories/AccessesRepository';
import CreateAccessService from '../services/CreateAccessService';

const accessRouter = Router();
const accessesRepository = new AccessesRepository();

accessRouter.get('/', (request, response) => {
  try {
    const access = accessesRepository.all();
    const balance = accessesRepository.getBalance();

    return response.json({
      access,
      balance,
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

accessRouter.post('/', (request, response) => {
  try {
    const { user, application, role, type } = request.body;
    const createAccess = new CreateAccessService(accessesRepository);
    const access = createAccess.execute({
      user,
      application,
      role,
      type,
    });
    return response.json(access);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default accessRouter;
