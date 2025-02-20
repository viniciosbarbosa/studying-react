import { ChangeEvent, useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  const handleChangeFirst = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, firstName: e.target.value });
  };

  const handleChangeLast = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, lastName: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={fullName.firstName}
        onChange={handleChangeFirst}
      />
      <input
        type="text"
        value={fullName.lastName}
        onChange={handleChangeLast}
      />
    </div>
  );
};

export default App;
