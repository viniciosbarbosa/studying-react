import styles from "./Button.module.css";
import AddIcon from "../../assets/add.svg";

type Props = {
  onClick: () => {};
};

export const Button = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick}>
        Criar <AddIcon />
      </button>
    </div>
  );
};
