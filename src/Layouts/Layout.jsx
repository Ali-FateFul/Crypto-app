import React from "react";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Crypto App</h1>
        <p>
          <a href="https://google.com">FateFul</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer>
        <p>Developed By FateFul With ♥</p>
      </footer>
    </div>
  );
};

export default Layout;
