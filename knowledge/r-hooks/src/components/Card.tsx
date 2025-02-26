import { useEffect, useState } from "react";

export const Card = () => {
  useEffect(() => {
    const handleWindowClick = () => {
      console.log("clicou");
    };

    window.addEventListener("click", handleWindowClick);
  }, []);

  return (
    <div>
      <h2>{}</h2>
    </div>
  );
};
