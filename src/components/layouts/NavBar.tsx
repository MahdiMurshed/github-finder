import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

type PropType = {
  title?: string;
};

const NavBar = ({ title = "Github Finder" }: PropType) => {
  return (
    <nav className="navbar bg-neutral text-neutral-content mb-2">
      <div className="container mx-auto">
        <div className="flex-none  px-2 mx-2 md:flex">
          <FaGithub className="inline text-3xl pr-2 " />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end items-center">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
