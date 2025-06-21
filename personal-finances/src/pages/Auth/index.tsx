import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubTitle,
  CardTitle,
  Container,
  Wrapper,
} from "./styles";
import Alert from "../../components/Alert";
import TextInput from "../../components/TextInput";
import { Button } from "../../components/Button";

type Props = {
  type: "sign-in" | "sign-up";
};

const Auth = ({ type }: Props) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showAlert, setShowAlert] = useState({
    type: "error",
    message: "",
    show: false,
  });

  const { handleSignIn, handleSignUp } = useAuth();

  const navigate = useNavigate();

  const handleOnClick = async () => {
    const [name, email, password] = [nameInput, emailInput, passwordInput];

    console.log(type);

    if ((type == "sign-up" && !name) || !email || !password) {
      setShowAlert({
        type: "error",
        message: "Preencha todos os campos !",
        show: true,
      });
      return;
    }

    const request = await (type == "sign-in"
      ? handleSignIn({ email, password })
      : handleSignUp({ name, email, password }));

    if (request != true) {
      setShowAlert({
        type: "error",
        message: request,
        show: true,
      });
      return;
    }

    navigate("/");
  };

  useEffect(() => {
    setShowAlert({ type: "error", message: "", show: false });
  }, [type]);

  return (
    <Wrapper>
      <Container>
        <Alert
          title={showAlert.message}
          type={showAlert.type}
          show={showAlert.show}
          setShow={(show) => setShowAlert({ ...showAlert, show })}
        />

        <Card>
          <CardHeader>
            <CardTitle>
              {type == "sign-in" ? "Entre na sua conta!" : "Criar uma conta!"}
            </CardTitle>

            <CardSubTitle>Insira as informacaoes necessarias</CardSubTitle>
          </CardHeader>

          <CardBody>
            {type == "sign-up" && (
              <TextInput
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Digite seu nome"
                value={nameInput}
                borderRadius="sm"
              />
            )}

            <TextInput
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Digite seu email"
              value={emailInput}
              borderRadius="sm"
            />

            <TextInput
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Digite sua senha"
              value={passwordInput}
              borderRadius="sm"
            />
          </CardBody>

          <CardFooter>
            <Button size="sm" onClick={() => handleOnClick()}>
              {type == "sign-in" ? "Entrar" : "Registrar-se"}
            </Button>

            {type == "sign-in" ? (
              <Link to="/signup">Nao tem conta ? Registrar-se</Link>
            ) : (
              <Link to="/signin">Ja Tem Conta ?</Link>
            )}
          </CardFooter>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Auth;
