import { Link, NavLink } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

import { useDispatch, useSelector } from "react-redux";

import { changeLayout } from "../redux/themeSlice";

function Navbar() {

  const { theme, changeTheme } = useTheme();

  const dispatch = useDispatch();

  const compact = useSelector(
    (state) => state.theme.compact
  );

  return (

    <nav className="navbar">

      <Link to="/" className="brand">

        🎓 Student Portal

      </Link>

      <div className="nav-links">

        <NavLink to="/" end>Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/students">Students</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </div>

      <div className="nav-actions">

        <button onClick={changeTheme}>

          {theme === "light" ? "Dark Mode" : "Light Mode"}

        </button>

        <button onClick={() => dispatch(changeLayout())}>

          {compact ? "Normal Layout" : "Compact Layout"}

        </button>

      </div>

    </nav>

  );

}

export default Navbar;