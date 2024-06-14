import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/products/1");
  };

  return (
    <div>
      <p>Produto</p>
      <button onClick={handleOnClick}>Detalhe Produto</button>
    </div>
  );
};
