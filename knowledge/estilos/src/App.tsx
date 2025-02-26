import styled from "styled-components";
import "./App.css";

const CardT = styled.div`
  background-color: white;
  width: 400px;
  height: 400px;
  padding: 30px;
  color: green;
`;

function App() {
  return (
    <div>
      <CardT />
    </div>
  );
}

export default App;
