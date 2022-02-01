import React from "react";

import "./footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()}  Copyright of Pradinata Architect  </p>
      {/* <p>All other trademarks belong to their respective owners.</p> */}
      <p>Design Studio.</p>
    </footer>
  );
};

export default Footer;
