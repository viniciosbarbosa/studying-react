import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <strong>Page 404 Not Found</strong>
      <br />

      <Link to={""}>Home</Link>
    </div>
  );
};
