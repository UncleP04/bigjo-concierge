import React from "react";
import style from "./style.module.css";
import Telegram from '../../Images/tele.png'
import LinkedIn from '../../Images/link.png'
import Twitter from '../../Images/twit.png'

const Footer = () => {
  return (
    <div>
      <div className={style.footer}>
        <section className={style.footerGrid}>
          <span>
            <h3 data-aos="zoom-in">BigjoConcierge</h3>
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
            <a href="https://linkedin.com"><img src={LinkedIn} alt="LinkedIn.png" /></a>
            <a href="https://twitter.com"><img src={Twitter} alt="Twitter.png" /></a>
            <a href="https://telegram.com"><img src={Telegram} alt="telegram.png" /></a>
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
