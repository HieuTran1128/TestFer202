import React from "react";
import "../css/Web.css";

const Web = () => {
  return (
    <div>
      <header className="header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/2560px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png" 
          alt="FPT University" 
          className="logo" 
        />
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className="content">
        <h2>About</h2>
        <p>This is the about section of the website.</p>
        <h2>Contact</h2>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </div>

      <footer className="footer">
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Web;
