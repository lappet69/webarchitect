import React from "react";

import "./footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PT Iseng Aja All Rights Reserved.</p>
      <p>All other trademarks belong to their respective owners.</p>
    </footer>
  );
};

export default Footer;
