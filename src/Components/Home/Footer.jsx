import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="copyright py-3 text-center">
        <p className="mb-0">
          Copyright © 2023 Oman Out Of Bounds. All Rights Reserved
        </p>
      </div>

      <div className="move-top text-right">
        <a href="#home" className="move-top">
          <span className="fa fa-angle-up  mb-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
