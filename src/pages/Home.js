import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const home = () => {
  return (
    <div>
      <div id="header">
        <div><h1>logo</h1></div>
      </div>
      <div id="navigation">
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
      <div id="sectionArticleAside">
        <div id="sectionArticle">
          <div id="section">
            <h1>section</h1>
          </div>
          <div id="article">
            <h1>article</h1>
          </div>
        </div>
        <div id="aside">
          <h1>aside</h1>
        </div>
      </div>
      <div id="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default home;
