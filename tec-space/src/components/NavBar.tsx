import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/FirebaseConection";

const NavBar = () => {
  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        toast.success("Logout Feito com sucesso");
      })
      .catch(() => toast.error("Ocorreu um erro tente novamente!"));
  };

  return (
    <>
      {/*NAVBAR */}

      <div className="w-full mx-auto flex flex-wrap gap-5 p-5 flex-col md:flex-row items-center bg-purple-600">
        <button
          onClick={handleSignOut}
          type="button"
          className="inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 border-0 mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
          Sair
        </button>

        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <h1 className="text-4xl text-orange-500 font-mono">Tech Space</h1>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline-none focus-visible:outline-offset-2 focus-visible:outline-orange-600 border-0 mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Criar Post
        </button>
      </div>
    </>
  );
};

export default NavBar;
