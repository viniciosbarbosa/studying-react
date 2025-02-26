import { CardTitle } from "../CardTitile";
import styles from "./Card.module.css";

export const Card = () => {
  return (
    <div className={styles.container}>
      <CardTitle />
    </div>
  );
};
