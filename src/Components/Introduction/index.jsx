import React from "react"
import IntroStyle from './introStyle.module.css'
import People from '../../Images/people.png'
import African from '../../Images/african.png'
import Arrow from '../../Images/arrow.png'
import SearchIcon from '@mui/icons-material/Search';
const Introduction = () => {

    return (
        <div>
            <div className={IntroStyle.introBox}>
                <div className={IntroStyle.leftIntro}>
                    <span className={IntroStyle.arrow} data-aos="fade-up">
                        <img src={Arrow} alt="arrow.png" />
                    </span>
                    <span className={IntroStyle.context}>
                        <h1 data-aos="fade-up">Get the best African Talent</h1>
                        <span className={IntroStyle.peopleBox} data-aos="fade-up">
                            <img src={People} alt="people.png" />
                            <p data-aos="fade-up">Hire exclusive Top African Software Developers,
                                designers, Product managers, Project managers</p>
                        </span>
                        <label className={IntroStyle.searchBox} data-aos="fade-up">
                            <span >
                                <SearchIcon />
                                <input type="text" placeholder="Try java developer, Design etc." disabled />
                            </span>
                            <span><a href="https://calendly.com/bigjoconcierge">Find a Talent</a></span>
                        </label>
                    </span>
                </div>
                <div className={IntroStyle.rightIntro} data-aos="fade-up">
                    <img src={African} alt="African.png" />
                </div>
            </div>
        </div>
    )
}

export default Introduction;