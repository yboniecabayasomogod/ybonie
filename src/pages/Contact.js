import React from "react";
import ContactCss from "../css/Contact.module.css";

const Contact = () => {
  return (
    <div className={ContactCss.container}>
      <div className={ContactCss.headerContainer}>
        <div className={ContactCss.logo}>logo</div>
      </div>
      <div className={ContactCss.navigationContainer}>
        <div className={ContactCss.navigation}>navigation</div>
      </div>
      <div className={ContactCss.sectionArticleAsideContainer}>
        <div className={ContactCss.sectionArticleContainer}>
          <div className={ContactCss.sectionContainer}>
            <div className={ContactCss.section}>section</div>
          </div>
          <div className={ContactCss.articleContainer}>
            <div className={ContactCss.article}>article</div>
          </div>
        </div>
        <div className={ContactCss.asideContainer}>
          <div className={ContactCss.aside}>aside</div>
        </div>
      </div>
      <div className={ContactCss.footerContainer}>
        <div className={ContactCss.footer}>footer</div>
      </div>
    </div>
  );
};

export default Contact;
