import { Link } from "react-router-dom";
import { userContext } from '../context/userContext';
import "../styles/Navbar.css";
import { useContext } from "react";


export default function Navbar() {
  const {user, setUser} = useContext(userContext)
  console.log(user.id)

  return (
    <div className="justify-between flex z-1 w-full absolute top-0 left-0 items-center h-14 bg-transparent text-gruvbox-light-font">
      <div className="nav-left-col nav-col">
        <a className="nav-item" href="https://github.com">
          Categories
        </a>
        <a className="nav-item" href="https://github.com">
          New
        </a>
        <a className="nav-item" href="https://github.com">
          Retail
        </a>
      </div>
      <div className="absolute w-full nav-col">
        <Link className="mid-a" to="/" >
          <h1>Paiva</h1>
        </Link>
      </div>
      <div className="nav-right-col nav-col">
        <Link className="nav-item" to={user.id > 0 ? '/profile' : '/signup'}>
          {user.id > 0 ? 'Profile' : 'Sign In'}
        </Link>
      </div>
    </div>
  );
}
