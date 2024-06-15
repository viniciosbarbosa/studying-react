import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>

      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;
