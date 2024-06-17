export type TransactionStatus = "Pending" | "Completed";

export type Transaction = {
  id: number;
  title: string;
  status: TransactionStatus;
  amount: number;
  createdAt: number;
  user_id: number;
};

export type TransactionDashboard = Omit<
  Transaction,
  "id" | "title" | "stauts" | "used_id"
>;

export type ApiGetTransactions = {
  transactions: {
    itemsReceived: number;
    curPage: number;
    nextPage?: string;
    prevPage?: string;
    offset: number;
    itemsTotal: number;
    pageTotal: number;
    items: Array<Transaction>;
  };
};

export type ApiGetTransaction = {
  transaction: Transaction;
};

export type ApiGetDashboard = {
  transactions: Array<TransactionDashboard>;
  pending_transactions: number;
  completed_transactions: number;
};

export type ApiNewTransaction = {
  transaction: Transaction;
};

export type ApiUpdateTransaction = {
  transaction: Transaction;
};

export type ApiDeleteTransaction = {
  success: boolean;
};
