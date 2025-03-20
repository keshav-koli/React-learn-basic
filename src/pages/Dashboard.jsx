import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <header
        style={{
          border: "solid red",
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 20px",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFoIwdyQ0yTWDy9a7J28ecUdCBdzJnCwLOA&s"
          alt=""
          height={"70px"}
        ></img>
        <h1>Welcome to our website</h1>
      </header>

      <nav id="mainNavBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <section
        style={{
          border: "solid blue",
          height: "70vh",
          display: "flex",
        }}
      >
        <aside
          style={{
            border: "solid blue",
            width: "20vh",
          }}
        >
          aside
        </aside>
        <main>
          main
          <Outlet />
        </main>
      </section>

      <footer style={{
        border:"solid red"
        
      }}>
        <h1>Footer thu thu ...</h1>
      </footer>
    </>
  );
};

export default Dashboard;
