import React from "react"
import style from './style.module.css'
import ArrowOne from '../../Images/Arrow 1.png'

const Expertise = () => {

    return (
        <div>
            <div className={style.expertiseBox}>
                <div className={style.leftExpertise}>
                    <h1 data-aos="fade-up">
                        Expertise,  <br />
                        commitment, <br />
                        and value.
                    </h1>
                    <img src={ArrowOne} alt="ArrowOne.png" />
                </div>
                <div className={style.rightExpertise}>
                    <span>
                        <p data-aos="fade-up">It's our mission to consistently <br /> provide these to our clients</p>
                        <p data-aos="fade-up">
                            We help companies <strong>build top-tier teams by hiring, developing and managing</strong> tech <br /> talent remotely
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Expertise;