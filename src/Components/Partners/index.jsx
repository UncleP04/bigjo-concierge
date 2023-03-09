import React from "react"
import style from './style.module.css'
import Cl1 from '../../Images/cl1.png'
import Cl2 from '../../Images/cl2.png'
import Cl3 from '../../Images/cl3.png'
import Cl4 from '../../Images/cl4.png'
import Cl5 from '../../Images/cl5.png'
import Cl6 from '../../Images/cl6.png'
import Cl7 from '../../Images/cl7.png'
import Cl8 from '../../Images/cl8.png'

const partners = () => {

    return (
        <div>
            <div className={style.partnersBox}>
                <label>
                    <h1 data-aos="fade-up">
                        Clients that Trust Us
                    </h1>
                    <p data-aos="fade-up">
                        We collaborate with a number of top tier companies on imagining the future of work, have a look.
                    </p>
                </label>
                <span>
                    <img src={Cl1} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl2} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl3} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl4} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl5} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl6} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl7} alt="partners.png" data-aos="fade-up" />
                    <img src={Cl8} alt="partners.png" data-aos="fade-up" />
                </span>
            </div>
        </div>
    )
}

export default partners;