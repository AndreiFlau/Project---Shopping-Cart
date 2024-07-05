// import { useState } from "react";
import styles from "./App.module.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1>General Store</h1>
        <div className={styles.headerSection}>
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
