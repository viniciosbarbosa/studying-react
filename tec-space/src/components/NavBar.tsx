import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, storage } from "../firebase/FirebaseConection";
import { useState, useRef, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import React from "react";

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isNewPostFormValid, setIsNewPostFormValid] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [postAuthorInput, setPostAuthorInput] = useState("");
  const [postTitleInput, setPostTitleInput] = useState("");
  const [postContentInput, setPostContentInput] = useState("");
  const [postImgFile, setPostImgFile] = useState<File | null>(null);
  const canceButtonrRef = useRef(null);

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        toast.success("Logout Feito com sucesso");
      })
      .catch(() => toast.error("Ocorreu um erro tente novamente!"));
  };

  console.log(postAuthorInput, postTitleInput, postContentInput);

  const handleInputForm = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;

    state(eventValue);
  };

  const handlePostImageInput = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLInputElement;
    const file: File | null = eventTarget.files && eventTarget.files[0];

    setPostImgFile(file);
    console.log(file);
  };

  const handleCreateNewPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (
      postTitleInput.trim().length > 0 &&
      postAuthorInput.trim().length > 0 &&
      postContentInput.trim().length > 0
    ) {
      setIsNewPostFormValid(true);
    } else {
      setIsNewPostFormValid(false);
    }

    if (!postImgFile) return;

    const storageRef = ref(storage, `images/${postImgFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, postImgFile);
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
          onClick={() => setOpenModal(!openModal)}
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

      {/*MODAL DE CRIAR POSTS */}
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relativo z-10"
          initialFocus={canceButtonrRef}
          onClose={setOpenModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex flex-col justify-center h-min"></div>
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel>
                  <div className="flex flex-col justify-center h-min">
                    <form
                      onSubmit={handleCreateNewPost}
                      className="max-w-[400px] max-h-[350px] overflow-auto w-full mx-auto bg-purple-600 p-8 px-8 rounded-lg mt-10"
                    >
                      <h2 className="text-3xl mb-5 dark:text-white font-bold text-center">
                        Criar Post
                      </h2>
                      <div className="flex flex-col text-start text-white py-2">
                        <label>Autor</label>
                        <input
                          value={postAuthorInput}
                          onChange={(event) =>
                            handleInputForm(event, setPostAuthorInput)
                          }
                          type="text"
                          placeholder="Digite o seu nome"
                          className={`w-full rounded-lg mt-2 p-2 ${
                            isNewPostFormValid
                              ? `bg-purple-700 focus:bg-purple-800 `
                              : `bg-red-700  focus:bg-red-800`
                          }  bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent`}
                        />
                      </div>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Título</label>
                        <input
                          value={postTitleInput}
                          onChange={(event) =>
                            handleInputForm(event, setPostTitleInput)
                          }
                          type="text"
                          placeholder="Digite o título"
                          className={`w-full rounded-lg mt-2 p-2 ${
                            isNewPostFormValid
                              ? `bg-purple-700 focus:bg-purple-800 `
                              : `bg-red-700  focus:bg-red-800`
                          }  bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent`}
                        />
                      </div>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Conteúdo</label>
                        <textarea
                          value={postContentInput}
                          onChange={(event) =>
                            handleInputForm(event, setPostContentInput)
                          }
                          placeholder="Digite o conteúdo"
                          className={`w-full rounded-lg mt-2 p-2 ${
                            isNewPostFormValid
                              ? `bg-purple-700 focus:bg-purple-800 `
                              : `bg-red-700  focus:bg-red-800`
                          }  bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent`}
                        />
                      </div>

                      <div className="flex flex-col text-start text-white py-2">
                        <label>Capa</label>
                        <input
                          type="file"
                          onChange={handlePostImageInput}
                          placeholder="Digite o conteúdo"
                          className="w-full cursor-pointer rounded-lg mt-2 p-2 bg-purple-700 focus:bg-purple-800 border-2 border-purple-800 focus:border-orange-700 focus:outline-none focus:placeholder-transparent"
                        />
                      </div>

                      {!imgUrl && isLoading && (
                        <progress value={progress} max="100" />
                      )}

                      {imgUrl && !isLoading && (
                        <img
                          src={imgUrl}
                          alt="Imagem de capa do post"
                          width={200}
                        />
                      )}

                      <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full my-5 py-2 bg-orange-500 shadow-lg  enabled:hover:shadow-orange-500/40 text-white font-semibold rounded-lg disabled:bg-orange-400 disabled:shadow-none enabled:shadow-orange-500/50"
                      >
                        {isLoading ? "Criando Post" : "Criar"}
                      </button>

                      <button
                        onClick={() => setOpenModal(false)}
                        disabled={isLoading}
                        type="button"
                        className="w-full py-2 bg-red-500 shadow-lg  enabled:hover:shadow-red-500/40 text-white font-semibold rounded-lg disabled:bg-red-400 disabled:shadow-none enabled:shadow-red-500/50"
                      >
                        Cancelar
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NavBar;
