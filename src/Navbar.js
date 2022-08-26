import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showContainer, setShowContainer] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (!linksRef.current) return;
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    if (showContainer) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showContainer]);

  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button
          className="nav-toggle"
          onClick={() => {
            setShowContainer(!showContainer);
          }}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`${
          showContainer ? "links-container" : "links-container show-container"
        }`}
        ref={linksContainerRef}
      >
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url} target="_blank">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
