import "./Movenments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovementsProps } from "../../models/interfaces/MovimentsProps/MovimentsProps";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";

const MovementsComponent = ({ movementsList }: MovementsProps) => {
  return (
    <div>
      <header className="movements_header">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="#7af1a7" size="2x" />

        <h2>
          {movementsList.length > 0
            ? "Movimentações"
            : "Sem Movimentações a exibir"}
        </h2>
      </header>

      {movementsList.length > 0 &&
        movementsList.map((moviment) => (
          <div key={moviment.id} className="movimentations_container">
            <div className="movimentation">
              <h2>{moviment.name}</h2>
              <h3
                className={`${
                  moviment.type === "Input" ? "balance_btn" : "expense_btn"
                }`}
              >
                {moviment.type === "Input" ? "+ " : "- "}
                {moviment.value}
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovementsComponent;
