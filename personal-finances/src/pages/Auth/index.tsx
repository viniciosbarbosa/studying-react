import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { SiTruenas } from "react-icons/si";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubTitle,
  CardTitle,
  Container,
  Link,
  Wrapper,
} from "./styles";
import Alert from "../../components/Alert";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";

type Props = {
  type: "signin" | "signup";
};

export const Auth = ({ type }: Props) => {
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
    if (!emailInput || !passwordInput || (type === "signup" && !nameInput)) {
      {
        setShowAlert({
          type: "error",
          message: "Preencha todos os campos",
          show: true,
        });
        return;
      }
    }

    const request = await (type === "signin"
      ? handleSignIn({ email: emailInput, password: passwordInput })
      : handleSignUp({
          name: nameInput,
          email: emailInput,
          password: passwordInput,
        }));

    if (request != true) {
      setShowAlert({
        type: "error",
        message: request,
        show: true,
      });
    }

    navigate("/");
  };

  useEffect(() => {
    setShowAlert({ type: "success", message: "", show: false });
  }, [type]);

  return (
    <div>
      <Wrapper>
        <Container>
          <Alert
            type={showAlert.type}
            show={showAlert.show}
            setShow={(show) => setShowAlert({ ...showAlert, show })}
            title={showAlert.message}
          />

          <CardHeader>
            <CardTitle>
              {type == "signin" ? "Entre na sua conta" : "Criar uma conta"}
            </CardTitle>
            <CardSubTitle>Insira as informações necessarias</CardSubTitle>
          </CardHeader>

          <CardBody>
            {type == "signup" && (
              <TextInput
                value={nameInput}
                placeholder="Digite seu nome"
                onChange={(e) => setNameInput(e.target.value)}
                borderRadius="sm"
              />
            )}

            <TextInput
              value={emailInput}
              placeholder="Digite seu email"
              onChange={(e) => setEmailInput(e.target.value)}
              borderRadius="sm"
            />

            <TextInput
              value={passwordInput}
              placeholder="Digite sua senha"
              onChange={(e) => setPasswordInput(e.target.value)}
              borderRadius="sm"
            />
          </CardBody>

          <CardFooter>
            <Button onClick={handleOnClick} size="md">
              {type == "signup" ? "Entrar" : "Registrar"}
            </Button>

            {type == "signin" ? (
              <Link to="/signup">Nao tem conta ? Se registre</Link>
            ) : (
              <Link to="/signin">Ja conta ? Entrar</Link>
            )}
          </CardFooter>
        </Container>
      </Wrapper>
    </div>
  );
};
