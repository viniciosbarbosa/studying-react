import { Movements } from "./../Movement/Movements";

export interface BalaceProps {
  emitMovent: (movement: Movements) => void;
  currentBalace: number;
}
