import React from "react"
import style from './style.module.css'

const WhyUs = () => {

    return (
        <div>
            <div className={style.why}>
                <div className={style.whyUsBox}>
                    <div className={style.leftWhyBox}>
                        <h1 data-aos="fade-up">WHY ORGANIZATIONS CHOOSE BIGJO CONCEIRGE</h1>
                        <p data-aos="fade-up">Discover the many ways in which our clients have <br />
                            embraced the benefits of the BigJo network.</p>
                    </div>
                    <div className={style.rightWhyBox}>
                        <span data-aos="fade-up">
                            <h2 data-aos="fade-up">Role-Specific Expertise</h2>
                        </span>
                        <span data-aos="fade-up">
                            <h2 data-aos="fade-up">90% Faster Hiring</h2>
                            <p data-aos="fade-up">We hire remote African talents beforehand after evaluating them thoroughly to filter out the world‘s top 1% of African talent.</p>
                        </span>
                        <span data-aos="fade-up">
                            <h2 data-aos="fade-up">Top quality Talents</h2>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;