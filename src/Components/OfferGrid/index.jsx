import React from "react"
import style from './style.module.css'
import Line from '../../Images/line.png'
import Circle from '../../Images/circle.png'
import { Label } from "reactstrap"

const OfferGrid = () => {

    return (
        <div className={style.offers}>
            <span className={style.effectOne} data-aos="fade-up"></span>
            <span className={style.effectTwo} data-aos="fade-up"></span>
            <div className={style.offerGrid}>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" data-aos="fade-up"/>
                    <span>
                        <h2 data-aos="fade-up">COST-EFFECTIVENESS</h2>
                        <p data-aos="fade-up">
                        In many African countries, the cost of living is lower than in other parts of the world, which can make hiring talent from the continent more cost-effective for companies. Remote work allows companies to tap into a global pool of talent, including professionals from Africa who may not be able to relocate but can bring unique skills and perspectives to the company.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" data-aos="fade-up"/>
                    <span>
                        <h2 data-aos="fade-up">ACCESS TO A GLOBAL POOL OF TALENT</h2>
                        <p data-aos="fade-up">
                        Remote work allows companies to tap into a global pool of talent, including professionals from Africa who may not be able to relocate but can bring unique skills and perspectives to the company.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" data-aos="fade-up"/>
                    <span>
                        <h2 data-aos="fade-up">CIMPROVE TIME MANAGEMENT</h2>
                        <p data-aos="fade-up">
                        Remote working eliminates the need for commuting, allowing professionals to better manage their time and increase their work-life balance.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" data-aos="fade-up"/>
                    <span>
                        <h2 data-aos="fade-up">ACCESS TO A DIVERSE WORKFORCE</h2>
                        <p data-aos="fade-up">
                        Remote hiring allows companies to tap into a diverse workforce, including professionals from Africa, which can bring a wider range of skills, perspectives, and cultural understanding to the company.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" data-aos="fade-up"/>
                    <span>
                        <h2 data-aos="fade-up">INCREASED PRODUCTIVITY</h2>
                        <p data-aos="fade-up">
                        Remote workers often have a high level of flexibility and autonomy, which can lead to increased productivity and job satisfaction.
                        </p>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default OfferGrid;