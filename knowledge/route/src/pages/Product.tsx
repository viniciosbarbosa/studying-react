import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Produto {id}</p>
    </div>
  );
};
