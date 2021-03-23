interface Transaction {
  id: string;
  amount: number;
  description: string;
  ccLastFour: string;
  ccExpiry: string;
  ccToken: string;
  customerId: string;
  date: string;
}

export class CreateMerchantDto {
  id: string;
  name: string;
  isTrading: boolean;
  currency: string;
  transactions: Transaction[];
}
