import { Movements } from "../Movement/Movements";

export interface ExpenseProps {
  emitMovement: (moviment: Movements) => void;
  currentExpenses: number;
  currentBalance: number;
}
