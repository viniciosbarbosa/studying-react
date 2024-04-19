import { useState } from "react";
import "./App.css";
import FinancialControl from "./components/FinancialControl/FinancialControl";
import Header from "./components/Header/Header";
import { Movements } from "./models/interfaces/Movement/Movements";
import Balace from "./components/Balace/Balace";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); //SaldoAtual
  const [currentExpenses, setCurrentExpenses] = useState(0); //DespesasAtuais
  const [movementsItens, setMovementsItens] = useState<Array<Movements>>([]); //Movimentacao

  const setNewMoviment = (movement: Movements) => {
    console.log(movement);

    if (movement) {
      setMovementsItens((prevMovements) => {
        const movements = [...prevMovements];
        console.log(movements);

        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        });

        return movements;
      });

      movement.type === "Input" &&
        setCurrentBalance(
          (prevBalance) => prevBalance + Number(movement.value)
        );

      console.log(currentBalance);

      if (movement.type == "Output") {
        setCurrentExpenses(
          (prevExpenses) => prevExpenses - Number(movement.value)
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
    </div>
  );
}

export default App;
