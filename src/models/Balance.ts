class Balance {
  useraccounts: number;

  serviceaccounts: number;

  total: number;

  constructor({ useraccounts, serviceaccounts, total }: Balance) {
    this.useraccounts = useraccounts;
    this.serviceaccounts = serviceaccounts;
    this.total = total;
  }
}

export default Balance;
