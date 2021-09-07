import { NavLink } from "react-router-dom";
import { useState } from "react";
import logoIcon from "../media/icon.png";
import "./styles/Navbar.css";

const Navbar = () => {
  let userState = localStorage.getItem("admin") || null;
  const [isAdmin, setIsAdmin] = useState(userState);

  const handleAdmin = () => {
    const inputKey = window.prompt("Enter the Admin secret key");
    const adminKey = process.env.REACT_APP_ADMIN_KEY;

    if (inputKey === adminKey) {
      localStorage.setItem("admin", true);
      setIsAdmin(true);
      window.alert("Congratulations You are now Admin");
    }
  };

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
        {isAdmin ? (
          <span
            className="admin"
            onClick={() => {
              window.alert(
                "You are admin ... you can delete any blog you want, soon you can also edit any blog"
              );
            }}
          >
            Admin ✔️
          </span>
        ) : (
          <span
            className="nav-link"
            onClick={(e) => {
              handleAdmin(e);
            }}
          >
            Grant as Admin
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
