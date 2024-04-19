import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import { Movements } from "../../models/interfaces/Movement/Movements";
import Balace from "../Balace/Balace";
import Expense from "../Expense/Expense";
import "./FinancialControl.css";

const FinancialControl = ({
  handleSetMovement,
  balance,
  expenses,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movements) => {
    movement && handleSetMovement(movement);
  };

  console.log(expenses);

  return (
    <div className="container_finances">
      <Balace currentBalace={balance} emitMovent={receiveNewMovement} />
      <Expense
        currentBalance={balance}
        currentExpenses={expenses}
        emitMovement={receiveNewMovement}
      />
    </div>
  );
};

export default FinancialControl;
