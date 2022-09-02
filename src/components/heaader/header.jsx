import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineAppstore } from "react-icons/ai";
import { FaUser, FaBrain, FaComment, FaListAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import "./header.css";
const Header = () => {
  const navItems = [
    `Home`,
    "About",
    "Services",
    "Portfolio",
    "Skills",
    "Contact",
  ];
  const icons = [
    <AiFillHome />,
    <FaUser />,
    <FaListAlt />,
    <BsFillBagCheckFill />,
    <FaBrain />,
    <FaComment />,
  ];
  useEffect(() => {
    let elems = document.querySelectorAll("header nav ul li a");
    for (let i = 0; i < elems.length; i++) {
      elems[i].firstChild.setAttribute("class", "nav-icon");
    }
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="logo">
          Peter
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href="">
                  {icons[i]}
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <AiOutlineClose
            className="nav-close"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <AiOutlineAppstore
          className="nav-toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </nav>
    </header>
  );
};

export default Header;
