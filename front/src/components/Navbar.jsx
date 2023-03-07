import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
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
        <a className="mid-a" href="https://github.com">
          <h1>Paiva</h1>
        </a>
      </div>
      <div className="nav-right-col nav-col">
        <a className="nav-item" href="https://github.com">
          Profile
        </a>
      </div>
    </div>
  );
}
