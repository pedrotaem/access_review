import Balance from '../models/Balance';
import Access from '../models/Access';

interface BalanceDTO {
  useraccounts: number;
  serviceaccounts: number;
  total: number;
}

interface CreateAccessDTO {
  user: string;
  application: string;
  role: string;
  type: 'user account' | 'service account';
}

class AccessesRepository {
  private accesses: Access[];

  private balances: BalanceDTO;

  constructor() {
    this.accesses = [];
    this.balances = {
      useraccounts: 0,
      serviceaccounts: 0,
      total: 0,
    };
  }

  public all(): Access[] {
    return this.accesses;
  }

  public getBalance(): Balance {
    const balance = this.accesses.reduce(
      (accumulator: Balance, access: Access) => {
        switch (access.type) {
          case 'user account':
            accumulator.useraccounts += 1;
            break;
          case 'service account':
            accumulator.serviceaccounts += 1;
            break;
          default:
            break;
        }
        accumulator.total =
          accumulator.useraccounts + accumulator.serviceaccounts;
        return accumulator;
      },
      {
        useraccounts: 0,
        serviceaccounts: 0,
        total: 0,
      },
    );
    return balance;
  }

  public create({ user, application, role, type }: CreateAccessDTO): Access {
    const access = new Access({ user, application, role, type });
    this.accesses.push(access);
    return access;
  }
}

export default AccessesRepository;
