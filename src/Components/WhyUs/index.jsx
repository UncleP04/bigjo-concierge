import React from "react"
import style from './style.module.css'

const WhyUs = () => {

    return (
        <div>
            <div className={style.why}>
                <div className={style.whyUsBox}>
                    <div className={style.leftWhyBox}>
                        <h1>WHY ORGANIZATIONS CHOOSE BIGJO CONCEIRGE</h1>
                        <p>Discover the many ways in which our clients have <br />
                            embraced the benefits of the BigJo network.</p>
                    </div>
                    <div className={style.rightWhyBox}>
                        <span>
                            <h2>Role-Specific Expertise</h2>
                        </span>
                        <span>
                            <h2>90% Faster Hiring</h2>
                            <p>We hire remote African talents beforehand after evaluating them thoroughly to filter out the world‘s top 1% of African talent.</p>
                        </span>
                        <span>
                            <h2>Top quality Talents</h2>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;