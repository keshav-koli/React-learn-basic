import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>I am Login Component</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, dolores
        laudantium placeat eaque quod eius error explicabo tenetur dolor
        repellat repellendus illum sint hic nam ipsa neque impedit deserunt.
        Dignissimos iste nostrum fugiat! Incidunt ad eius corporis porro
        aspernatur at atque perferendis doloribus, sunt ex perspiciatis, maiores
        non, nesciunt quibusdam.
      </p>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <NavLink to="LoginAdmin">Admin</NavLink>
        <NavLink to="LoginUser">Users</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Login;
