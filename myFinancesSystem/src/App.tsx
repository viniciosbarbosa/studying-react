import { useState } from "react";
import "./App.css";
import FinancialControl from "./components/FinancialControl/FinancialControl";
import Header from "./components/Header/Header";
import { Movements } from "./models/interfaces/Movement/Movements";
import MovementsComponent from "./components/Movements/Movements";
import { FormatMoney } from "./utils/util";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); //SaldoAtual
  const [currentExpenses, setCurrentExpenses] = useState(0); //DespesasAtuais
  const [movementsItens, setMovementsItens] = useState<Array<Movements>>([]); //Movimentacao

  console.log(movementsItens);

  const output = movementsItens.filter((movement) => movement.type == "Output");

  console.log(output);

  const setNewMoviment = (movement: Movements) => {
    if (movement) {
      setMovementsItens((prevMovements) => {
        const movements = [...prevMovements];

        movements.unshift({
          name: movement.name,
          value: FormatMoney(movement.value),
          type: movement.type,
          id: Math.random().toString(),
        });

        return movements;
      });

      movement.type === "Input" &&
        setCurrentBalance(
          (prevBalance) => prevBalance + Number(movement.value)
        );

      if (movement.type == "Output") {
        setCurrentExpenses(
          (prevExpenses) => prevExpenses + Number(movement.value)
        );

        currentBalance > 0 &&
          setCurrentBalance(
            (prevBalance) => prevBalance - Number(movement.value)
          );
      }
    }
  };

  return (
    <div>
      <Header />
      <FinancialControl
        handleSetMovement={setNewMoviment}
        balance={currentBalance}
        expenses={currentExpenses}
      />

      <MovementsComponent movementsList={movementsItens} />
    </div>
  );
}

export default App;
