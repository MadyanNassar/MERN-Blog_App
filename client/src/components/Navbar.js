import { NavLink } from "react-router-dom";
import logoIcon from "../media/icon.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        <div className="nav-logo">
          <img src={logoIcon} className="nav-icon" alt="blog icon" />
          <h1 className="title">Blogger</h1>
        </div>
      </NavLink>
      <div className="nav-links">
        <NavLink exact to="/" className="nav-link">
          <span>Home</span>
        </NavLink>
        <NavLink exact to="/favorite_blogs" className="nav-link">
          <span>Favorite Blogs</span>
        </NavLink>
        <NavLink exact to="/add_blog" className="nav-link">
          <span>New Blog</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
