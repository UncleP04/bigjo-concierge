import React from "react";
import style from "./footerStyle.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const LinkIcon = {
    color: "white",
  };
  return (
    <div>
      <div className={style.footer} id="ContactUs">
        <section className={style.footerGrid}>
          <span>
            <h3 data-aos="zoom-in">Wecruitme</h3>
          </span>
          <span className={style.footerText}>
            <p data-aos="zoom-in">
              Wecruitme offers a unique, personalized approach to talent
              acquisition and management, ensuring that clients find the perfect
              candidates to meet their specific needs and drive their businesses
              forward. With an extensive network of connections and a deep
              understanding of the African tech landscape.
            </p>
          </span>
          <span className={style.footerLinks} data-aos="zoom-in">
            <a href="https://www.linkedin.com/company/WECRUITME-service/" target="_blank">
              <LinkedInIcon style={LinkIcon} />
            </a>
            <a href="https://twitter.com/BigJoConcierge" target="_blank">
              <TwitterIcon style={LinkIcon} />
            </a>
            <a
              href="https://bigjoconcierge.com/_link/?link=mailto%3Abigjo%40bigjoconcierge.com&target=uQCiQh9f3p8UWppAvxu4KWkeQtPbUScBBb3psFfgnIFTAuwgmEIHy3h0ToqzGP1GRTVQfGUT6ff7APPFzZP3bJtR%2FxsnOfH%2FAXcE76n%2F1VZYRaU%3D&iv=i7BkEls3pJ5b58Ui"
              title="bigjo@bigjoconcierge.com"
              target="_blank"
            >
              <EmailIcon style={LinkIcon} />
            </a>
            <a href="https://wa.me/message/6EKOUHPFZHV3N1" target="_blank">
              <WhatsAppIcon style={LinkIcon} />
            </a>
          </span>
        </section>
        <section className={style.footerCopywrite}>
          <p>@copyright 2022, ALL RIGHT RESERVED BY Wecruitme.</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
