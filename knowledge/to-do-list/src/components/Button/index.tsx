import style from "./Button.module.css";
import AddIcon from "../../assets/add.svg"; // Importa a imagem como uma string (caminho)

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick }: Props) => {
  return (
    <div className={style.container}>
      <button onClick={onClick}>
        Criar <img src={AddIcon} alt="Add Icon" />
      </button>
    </div>
  );
};
