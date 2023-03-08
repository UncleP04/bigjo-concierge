import React from "react"
import style from './style.module.css'
import Line from '../../Images/line.png'
import Circle from '../../Images/circle.png'
import { Label } from "reactstrap"

const OfferGrid = () => {

    return (
        <div className={style.offers}>
            <span className={style.effectOne}></span>
            <span className={style.effectTwo}></span>
            <div className={style.offerGrid}>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" />
                    <span>
                        <h2>COST-EFFECTIVENESS</h2>
                        <p>
                        In many African countries, the cost of living is lower than in other parts of the world, which can make hiring talent from the continent more cost-effective for companies. Remote work allows companies to tap into a global pool of talent, including professionals from Africa who may not be able to relocate but can bring unique skills and perspectives to the company.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" />
                    <span>
                        <h2>ACCESS TO A GLOBAL POOL OF TALENT</h2>
                        <p>
                        Remote work allows companies to tap into a global pool of talent, including professionals from Africa who may not be able to relocate but can bring unique skills and perspectives to the company.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" />
                    <span>
                        <h2>CIMPROVE TIME MANAGEMENT</h2>
                        <p>
                        Remote working eliminates the need for commuting, allowing professionals to better manage their time and increase their work-life balance.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" />
                    <span>
                        <h2>ACCESS TO A DIVERSE WORKFORCE</h2>
                        <p>
                        Remote hiring allows companies to tap into a diverse workforce, including professionals from Africa, which can bring a wider range of skills, perspectives, and cultural understanding to the company.
                        </p>
                    </span>
                </label>
                <label>
                    <img className={style.offerImg} src={Circle} alt="circle.png" />
                    <span>
                        <h2>INCREASED PRODUCTIVITY</h2>
                        <p>
                        Remote workers often have a high level of flexibility and autonomy, which can lead to increased productivity and job satisfaction.
                        </p>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default OfferGrid;