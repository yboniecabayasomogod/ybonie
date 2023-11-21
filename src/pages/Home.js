import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const home = () => {
  return (
    <div>
      <div id="header">
        <div id="logo">
          <h1>logo</h1>
        </div>
      </div>
      <div id="navigation">
        <div id="menu">
          <Link to="/ybonie" id="link">
            Home
          </Link>
          <Link to="/About" id="link">
            About
          </Link>
          <Link to="/Contact" id="link">
            Contact
          </Link>
        </div>
      </div>
      <div id="sectionArticleAside">
        <div id="sectionArticle">
          <div id="section">
            <div id="sectionDetailed">
              <h1>section</h1>
            </div>
          </div>
          <div id="article">
            <div id="articleDetailed">
              <h1>article</h1>
            </div>
          </div>
        </div>
        <div id="aside">
          <div id="sidebar">
            <h1>aside</h1>
          </div>
        </div>
      </div>
      <div id="footer">
        <div id="footerBottom">
          <h1>footer</h1>
        </div>
      </div>
    </div>
  );
};

export default home;
