import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Products = () => {
  // const navigate = useNavigate();
  // const handleOnClick = () => {
  //   navigate("/products/1");
  // };
  // return (
  //   <div>
  //     <p>Produto</p>
  //     <button onClick={handleOnClick}>Detalhe Produto</button>
  //   </div>
  // );

  const [searchParms, setSearchParams] = useSearchParams();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setSearchParams({
      count: count.toString(),
    });
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <strong>Essa e a pagina produtos</strong>
      <br />

      <button onClick={handleClick}>Add +</button>
    </div>
  );
};
