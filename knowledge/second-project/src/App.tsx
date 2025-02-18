import { FormEvent } from "react";

const App = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("teste");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>enviar</button>
      </form>
    </div>
  );
};

export default App;
