import React from "react"
import style from './style.module.css'
import ArrowOne from '../../Images/Arrow 1.png'

const Expertise = () => {

    return (
        <div>
            <div className={style.expertiseBox}>
                <div className={style.leftExpertise}>
                    <h1>
                        Expertise,  <br />
                        commitment, <br />
                        and value.
                    </h1>
                    <img src={ArrowOne} alt="ArrowOne" />
                </div>
                <div className={style.rightExpertise}>
                    <span>
                        <p>It's our mission to consistently <br /> provide these to our clients</p>
                        <p>
                            We help companies <strong>build top-tier teams <br /> by hiring, developing and managing</strong> tech <br /> talent remotely
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Expertise;