import React from "react"
import style from './style.module.css'

const Hiring = () => {

    return (
        <div>
           <div className={style.hiring}>
                <div className={style.hiringBox}>
                        <h1>Hiring Made Easy</h1>
                        <p>We filter through numerous applications to find and vet the finest talent. Tell us what you need & we’d get it to you in record time. Here’s how to hire remote developers in the easiest and quickest way.</p>

                        <label>
                                <h2 className={style.hiringHeadH2}>Interview Vetted Talent</h2>
                               <span className={style.longLine}></span>
                                <span className={style.shortLine1}></span>
                                <span className={style.shortLine2}></span>
                                <span className={style.shortLine3}></span>
                                <span className={style.shortLine4}></span>
                                <span className={style.textbox}>
                                    <span className={style.textOne}>
                                        <h2>Make Hire Request</h2>
                                        <p>An expert on our team will work with you to understand your goals, technical needs, and team dynamics.</p>
                                    </span>
                                    <span className={style.textTwo}>
                                        <p>Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.</p>
                                    </span>
                                    <span className={style.textThree}>
                                        <h2>Hire Talent</h2>
                                    </span>
                                </span>
                        </label>
                </div>
           </div>
        </div>
    )
}

export default Hiring;