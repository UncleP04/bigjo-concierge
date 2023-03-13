import React from "react";
import style from "./style.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  const LinkIcon = {
    color: 'white'
  }
  return (
    <div>
      <div className={style.footer} id="ContactUs">
        <section className={style.footerGrid}>
          <span>
            <h3 data-aos="zoom-in">BigJoConcierge</h3>
          </span>
          <span className={style.footerText}>
            <p data-aos="zoom-in">
              BigJo Concierge offers a unique, personalized approach to talent
              acquisition and management, ensuring that clients find the perfect
              candidates to meet their specific needs and drive their businesses
              forward. With an extensive network of connections and a deep
              understanding of the African tech landscape.
            </p>
          </span>
          <span className={style.footerLinks} data-aos="zoom-in">
            <a href="https://www.linkedin.com/company/bigjo-concierge-service/"><LinkedInIcon style={LinkIcon} /></a>
            <a href="https://twitter.com/BigJoConcierge"><TwitterIcon style={LinkIcon} /></a>
          </span>
        </section>
        <section className={style.footerCopywrite}>
          <p>@copyright 2022, ALL RIGHT RESERVED BY BIGJO-CONCIERGE.</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
