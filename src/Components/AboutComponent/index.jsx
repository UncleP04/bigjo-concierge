import React from "react";
import style from "./aboutStyle.module.css";
import MixColors from "../../Images/mixcolor.png";
import Arrow from "../../Images/arrow.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutComponent = () => {
  const LeftArrow = {
    color: "white",
    backgroundColor: "#fcb34c",
    padding: "10px",
    fontSize: "40px",
  };

  const RightArrow = {
    color: "white",
    backgroundColor: "#1b5b63",
    padding: "10px",
    fontSize: "40px",
  };

  return (
    <div>
      <section className={style.aboutBox} id="AboutUs">
        <div className={style.imageBox}>
          <img src={MixColors} alt="MixColors.png" data-aos="fade-up"/>
        </div>
        <div className={style.aboutContent}>
          <h2 data-aos="fade-up">
            About BigJo <br /> Concierge
          </h2>
          <p data-aos="fade-up">
            BigJo Concierge is a premier talent acquisition and management
            company that connects web2 & web3 brands with top-tier African
            talent and provides them with complete Human Resource Management
            services.
          </p>
          <p data-aos="fade-up">
            BigJo Concierge offers a unique, personalized approach to talent
            acquisition and management, ensuring that clients find the perfect
            candidates to meet their specific needs and drive their businesses
            forward.
          </p>
          <p data-aos="fade-up">
            With an extensive network of connections and a deep understanding of
            the African tech landscape, BigJo Concierge is dedicated to helping
            companies of all sizes and in all sectors find and hire the best and
            brightest talent from across the continent, and handle all the HR
            management, from recruitment to employee engagement, performance
            management, and retention.
            <p data-aos="fade-up">
              Whether you're looking to build a world-class engineering team,
              expand into new markets, or find top-notch talent to take your
              business to the next level, BigJo Concierge is here to help.
            </p>
          </p>
        </div>
        <div className={style.customersBox}>
          <h2 data-aos="fade-up">
            What Our Customers <br /> are saying
          </h2>
          <p data-aos="fade-up">
            I’ve been working with Jo since 2020 it’s been 2 wonderful years
            having him by my side. Whenever I need any information or for him to
            find a connection/contact for me he will get it done every time.
          </p>
          <p data-aos="fade-up">
            Not once has Jo let me down with the quality work he does.
            Communication wise Jo speaks very great english always super
            respectful and knowledgeable about different subjects
          </p>
          <p data-aos="fade-up">
            Having Jo by your side is truly helpful, things you won’t be able to
            find online he can/will. Looking forward for coming years working
            together.
          </p>
          <span data-aos="fade-up">
            <h3>Andrew</h3>
            <p>CEO Exo Venture</p>
          </span>
        </div>
        <div className={style.siteComments}>
          <div className={style.arrowLeftAndRight} data-aos="fade-up">
            <ArrowBackIcon style={LeftArrow} />
            <ArrowForwardIcon style={RightArrow} />
          </div>
          <p data-aos="fade-up">
            BigJo has been working in Cryptomeda as a community admin for almost
            a year. I'm satisfied with their work. They are technically
            knowledgeable, professional, and responsible.
          </p>
          <span data-aos="fade-up">
            <h3>Andrew</h3>
            <p>CEO Exo Venture</p>
          </span>
          <div className={style.arrowBox}>
            <img src={Arrow} alt="Arrow.png" data-aos="fade-up"/>
          </div>
        </div>
      </section>
      <section className={style.consultation}>
        <span>
          <h1 data-aos="fade-up">
            Book a Free Career <br /> Consultation
          </h1>
        </span>
        <span className={style.bookSession}>
          <span>
            <p data-aos="fade-up">
              Tap into our large pool of top <br /> African tech talent
              globally.
            </p>
            <div className={style.bookButton} data-aos="fade-up">
              <a href="https://calendly.com/josephnssien/career-consultation?month=2023-03">Book a session</a>
            </div>
          </span>
        </span>
      </section>
    </div>
  );
};

export default AboutComponent;
