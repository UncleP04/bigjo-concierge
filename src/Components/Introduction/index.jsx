import React from "react"
import style from './style.module.css'
import People from '../../Images/people.png'
import African from '../../Images/african.png'
import Arrow from '../../Images/arrow.png'
import SearchIcon from '@mui/icons-material/Search';
const Introduction = () => {

    return (
        <div>
            <div className={style.introBox}>
                <div className={style.leftIntro}>
                    <span className={style.arrow} data-aos="fade-up">
                        <img src={Arrow} alt="" />
                    </span>
                    <span className={style.context}>
                        <h1 data-aos="fade-up">Get the best African Talent</h1>
                        <span className={style.peopleBox} data-aos="fade-up">
                            <img src={People} alt="people.png" />
                            <p data-aos="fade-up">Hire exclusive Top African Software Developers,
                                designers, Product managers, Project managers</p>
                        </span>
                        <label className={style.searchBox} data-aos="fade-up">
                            <span >
                                <SearchIcon />
                                <input type="text" placeholder="Try java developer, Design etc." />
                            </span>
                            <span><a>Find a Talent</a></span>
                        </label>
                    </span>
                </div>
                <div className={style.rightIntro} data-aos="fade-up">
                    <img src={African} alt="African.png" />
                </div>
            </div>
        </div>
    )
}

export default Introduction;