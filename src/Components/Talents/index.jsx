import React from "react";
import style from "./talentStyle.module.css";
import Regtangle from "../../Images/regtan.png";

const Talents = () => {
  return (
    <div>
      <div className={style.talentBox}>
        <h1 data-aos="fade-up">
          WHY HIRE AFRICAN <br />
          TALENTS <img src={Regtangle} alt="regtangle.png" /> <br />
          TO WORK REMOTELY
        </h1>
      </div>
    </div>
  );
};

export default Talents;
