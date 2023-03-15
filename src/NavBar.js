import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The blogs</h1>
      <div className="link">
        <Link to="/">home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
