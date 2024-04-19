import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import { Movements } from "../../models/interfaces/Movement/Movements";
import Balace from "../Balace/Balace";
import "./FinancialControl.css";

const FinancialControl = ({
  handleSetMovement,
  balance,
  expenses,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movements) => {
    movement && handleSetMovement(movement);
  };

  return (
    <div className="container_finances">
      <Balace currentBalace={balance} emitMovent={receiveNewMovement} />
    </div>
  );
};

export default FinancialControl;
