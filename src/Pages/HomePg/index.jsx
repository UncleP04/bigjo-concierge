import React from "react"
import Expertise from "../../Components/Expertise";
import Introduction from "../../Components/Introduction";
import Partners from "../../Components/Partners";
import Talents from "../../Components/Talents";
import OfferGrid from "../../Components/OfferGrid";
import WhyUs from "../../Components/WhyUs";
import style from './style.module.css'
import Hiring from "../../Components/Hiring";

const HomePage = () => {

    return (
        <div>
            <Introduction />
            <Expertise />
            <Partners />
            <Talents />
            <OfferGrid />
            <WhyUs />
            <Hiring />
        </div>
    )
}

export default HomePage;