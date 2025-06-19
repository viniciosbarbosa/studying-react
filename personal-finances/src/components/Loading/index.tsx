import { useTheme } from "styled-components";
import { Container, Label } from "./styles";
import { HashLoader } from "react-spinners";

export const Loading = () => {
  const theme = useTheme();

  return (
    <Container>
      <HashLoader color={theme.COLORS.primary} />
      <Label>Por Favor Aguarde...</Label>
    </Container>
  );
};
