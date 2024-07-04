// import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>General Store</h1>
        <div className="header-section">
          <ul>
            <li>
              <Link to="homepage">Homepage</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
