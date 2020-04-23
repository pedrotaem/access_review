import { uuid } from 'uuidv4';

class Access {
  id: string;

  user: string;

  application: string;

  role: string;

  type: 'user account' | 'service account';

  constructor({ user, application, role, type }: Omit<Access, 'id'>) {
    this.id = uuid();
    this.user = user;
    this.application = application;
    this.role = role;
    this.type = type;
  }
}

export default Access;
