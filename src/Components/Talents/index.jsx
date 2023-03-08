import React from "react";
import style from "./style.module.css";
import Regtangle from "../../Images/regtan.png";

const Talents = () => {
  return (
    <div>
      <div className={style.talentBox}>
        <h1>
          WHY HIRE AFRICAN <br />
          TALENTS <img src={Regtangle} alt="" /> <br />
          TO WORK REMOTELY
        </h1>
      </div>
    </div>
  );
};

export default Talents;
