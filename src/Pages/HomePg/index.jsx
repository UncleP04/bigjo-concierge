import React from "react"
import Expertise from "../../Components/Expertise";
import Introduction from "../../Components/Introduction";
import Partners from "../../Components/Partners";
import Talents from "../../Components/Talents";
import OfferGrid from "../../Components/OfferGrid";
import WhyUs from "../../Components/WhyUs";
import Hiring from "../../Components/Hiring";
import AboutComponent from "../../Components/AboutComponent";
import Footer from "../../Components/Footer";

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
               <AboutComponent />
               <Footer />
        </div>
    )
}

export default HomePage;