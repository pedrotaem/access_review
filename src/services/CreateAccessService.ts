import AccessesRepository from '../repositories/AccessesRepository';
import Access from '../models/Access';

interface Request {
  user: string;
  application: string;
  role: string;
  type: 'user account' | 'service account';
}

class CreateAccessService {
  private accessesRepository: AccessesRepository;

  constructor(accessesRepository: AccessesRepository) {
    this.accessesRepository = accessesRepository;
  }

  public execute({ user, application, role, type }: Request): Access {
    if (!['user account', 'service account'].includes(type)) {
      throw new Error(
        'Access type invalid. It must be "user account" or "service account"',
      );
    }

    // const { total } = this.accessesRepository.getBalance();
    // if (type === 'outcome' && total < value) {
    //   throw new Error('You dont have enought balance');
    // }
    const access = this.accessesRepository.create({
      user,
      application,
      role,
      type,
    });
    return access;
  }
}

export default CreateAccessService;
