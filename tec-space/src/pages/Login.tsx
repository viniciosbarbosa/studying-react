import { useState } from "react";
import LoginImg from "../assets/daniel-korpai-HyTwtsk8XqA-unsplash.jpg";

const Login = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const handleDisplayCreateAccount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setDisplayLogin(false);
    setDisplaySignUp(true);
  };

  const handleDisplayLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setDisplayLogin(true);
    setDisplaySignUp(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-screen object-cover"
          src={LoginImg}
          alt="Imagem de um notebook
        "
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center itens-center mb-14">
          <h1 className="text-4xl text-orange-500 text-center font-semibold">
            Tech Space 👨‍💻
          </h1>
        </div>

        {displayLogin && (
          <form className="max-w-[400px] w-full mx-auto bg-purple-600 p-8 rounded-lg">
            <h2 className="text-4xl dark:text-white font-semibold text-center">
              Login
            </h2>

            <div className="flex flex-col text-white py-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="rounded-lg mt-2 p-2 bg-purple-700 focus:bg-orange-700 focus:outline-none focus:placeholder-transparent border-2 border-purple-800"
              />
            </div>

            <div className="flex flex-col text-white py-2">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="rounded-lg mt-2 p-2 bg-purple-700 focus:bg-orange-700 focus:outline-none focus:placeholder-transparent border-2 border-purple-800"
                maxLength={10}
                minLength={6}
              />
            </div>

            <div className="flex justify-center text-white py-2 hover:cursor-pointer hover:animate-pulse">
              <button
                onClick={(event) => handleDisplayCreateAccount(event)}
                type="button"
              >
                Criar conta
              </button>
            </div>
            <button
              className="w-full my-5 py-2 bg-orange-500 shadow-lg enabled:hover:shadow-orange-500/40 text-white font-semibold disabled:bg-orange-400 disabled:shadow-none enabled:shadow-orange-500/50"
              type="submit"
            >
              Fazer login
            </button>
          </form>
        )}

        {displaySignUp && (
          <form className="max-w-[400px] w-full mx-auto bg-purple-600 p-8 rounded-lg">
            <h2 className="text-4xl dark:text-white font-semibold text-center">
              Criar Conta
            </h2>

            <div className="flex flex-col text-white py-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="rounded-lg mt-2 p-2 bg-purple-700 focus:bg-orange-700 focus:outline-none focus:placeholder-transparent border-2 border-purple-800"
              />
            </div>

            <div className="flex flex-col text-white py-2">
              <label>Senha</label>
              <input
                type="password"
                maxLength={10}
                minLength={6}
                placeholder="Crie sua senha de 6 a 10 caracteres"
                className="rounded-lg mt-2 p-2 bg-purple-700 focus:bg-orange-700 focus:outline-none focus:placeholder-transparent border-2 border-purple-800"
              />
            </div>

            <div className="flex justify-center text-white py-2 hover:cursor-pointer hover:animate-pulse">
              <button
                onClick={(event) => handleDisplayLogin(event)}
                type="button"
              >
                Fazer login
              </button>
            </div>

            <button
              className="w-full my-5 py-2 bg-orange-500 shadow-lg enabled:hover:shadow-orange-500/40 text-white font-semibold disabled:bg-orange-400 disabled:shadow-none enabled:shadow-orange-500/50"
              type="submit"
            >
              Criar conta
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
