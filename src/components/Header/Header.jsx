import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg"></img>
      <div className={s.loginBlock}>
        <NavLink to="/login">Login</NavLink>
      </div>
    </header>
  );
};
export default Header;
