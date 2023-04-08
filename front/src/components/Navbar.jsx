import { Link } from "react-router-dom";
import { userContext } from '../context/userContext';
import { useContext } from "react";


export default function Navbar() {
  const { user, setUser } = useContext(userContext)

  return (
    <div className="justify-between grid grid-cols-3 z-1 w-full top-0 left-0 items-center h-14 bg-transparent text-gruvbox-light-font">
      <div className="flex justify-start">
        <a className="z-10 rounded-xl m-2 py-1 px-3 duration-300 hover:scale-105 hover:shadow-nav-i" href="https://github.com">
          Categories
        </a>
        <a className="z-10 rounded-xl m-2 py-1 px-3 duration-300 hover:scale-105 hover:shadow-nav-i" href="https://github.com">
          New
        </a>
        <a className="z-10 rounded-xl m-2 py-1 px-3 duration-300 hover:scale-105 hover:shadow-nav-i" href="https://github.com">
          Retail
        </a>
      </div>
      <div className="w-full flex justify-evenly z-0">
        <Link className="font-serif font-extrabold text-3xl hover:text-gruvbox-red duration-300" to="/" >
          Logo
        </Link>
      </div>
      <div className="flex justify-end">
        <Link className="z-10 rounded-xl m-2 py-1 px-3 duration-300 hover:scale-105 hover:shadow-nav-i" to={user.id > 0 ? '/profile' : '/signup'}>
          {user.id > 0 ? 'Profile' : 'Sign In'}
        </Link>
      </div>
    </div>
  );
}
