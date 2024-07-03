// import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="homepage">Homepage</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
