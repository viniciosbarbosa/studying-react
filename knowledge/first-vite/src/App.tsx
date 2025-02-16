import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";
import { UserName } from "./components/UserName";

const App = () => {
  return (
    <>
      <h1>Bem vindo</h1>
      <div style={{ border: "1px solid red", width: "100%", height: "100vh" }}>
        <Card children={<div>teste</div>} />
      </div>
    </>
  );
};

export default App;
