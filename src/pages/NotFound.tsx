import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg flex flex-col gap-8">
          <h1 className="text-6xl font-bold">Oops</h1>
          <p className="text-4xl font-bold"> 404-Page Not Found !!</p>
          <Link to="/" className="btn btn-ghost btn-md rounded-btn ">
            <FaHome className="mr-2 text-lg" />
            <p className="text-lg">Go to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
