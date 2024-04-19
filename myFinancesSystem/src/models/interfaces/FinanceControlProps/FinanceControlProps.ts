import { Movements } from "./../Movement/Movements";

export interface FinanceControlProps {
  handleSetMovement: (movement: Movements) => void;
  balance: number;
  expenses: number;
}
