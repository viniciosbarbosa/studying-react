import { Input } from "../Input/input";
import { CardContainer, Title } from "./styles";

export const Card = () => {
  return (
    <div>
      <CardContainer>
        Oiii <br />
        <Title $color="red" $background="red">
          Teste
        </Title>
        <Input />
      </CardContainer>
    </div>
  );
};
