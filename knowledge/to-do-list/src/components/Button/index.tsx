import style from "./Button.module.css";
import AddIcon from "../../assets/add.svg";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick }: Props) => {
  return (
    <div className={style.container}>
      <button onClick={onClick}>
        Criar <AddIcon />
      </button>
    </div>
  );
};
