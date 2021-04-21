import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg"
        alt="img"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
