import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const home = () => {
  return (
    <div>
      <div id="header">
        <h1>Header</h1>
      </div>
      <div id="navigation">
        <Link to="/" id="link">
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
            <h1>Section</h1>
          </div>
          <div id="article">
            <h1>article</h1>
          </div>
        </div>
        <div id="aside">
          <h1>Aside</h1>
        </div>
      </div>
      <div id="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default home;
