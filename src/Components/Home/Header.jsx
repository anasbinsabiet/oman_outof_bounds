import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const todo = (id) => {
    const section = document.querySelector("#destinations");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const browse = (id) => {
    const section = document.querySelector("#package");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const who = (id) => {
    const section = document.querySelector("#about");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const contact = (id) => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const logoutAction = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  return (
    <header>
      <div className="container">
        {/* nav */}
        <nav className="py-md-4 py-3 d-lg-flex">
          <div id="logo">
            <h1 className="mt-md-0 mt-2">
              {" "}
              <Link to="/">
                <span className="fa fa-map-signs" /> Oman Out of Bounds
              </Link>
            </h1>
          </div>
          <label htmlFor="drop" className="toggle">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu ml-auto mt-1">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/" onClick={todo}>
                Things to do{" "}
              </Link>
            </li>
            <li className="">
              <Link to="/" onClick={browse}>
                Browse Travel Plans
              </Link>
            </li>
            <li className="">
              <Link to="/" onClick={who}>
                Who we are
              </Link>
            </li>
            <li className="">
              <Link to="/" onClick={contact}>
                Contact
              </Link>
            </li>
            <li className="booking">
              {localStorage.getItem("token") ? (<Link onClick={() => logoutAction()}>Logout</Link>) : (<Link to="/login">Login</Link>)}
              
            </li>
          </ul>
        </nav>
        {/* //nav */}
      </div>
    </header>
  );
};

export default Header;
