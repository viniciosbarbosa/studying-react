import "./App.css";
import axios, { AxiosError } from "axios";

function App() {
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleGetPosts = async () => {
    try {
      const posts = await api.get("posts");
      console.log(posts.data);
    } catch (e) {
      const error = e as AxiosError;

      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGetPosts}>Click</button>
    </div>
  );
}

export default App;
