import React from "react"
import Expertise from "../../Components/Expertise";
import Introduction from "../../Components/Introduction";
import Navbar from "../../Components/Nav";
import Partners from "../../Components/Partners";
import Talents from "../../Components/Talents";
import style from './style.module.css'

const HomePage = () => {

    return (
        <div>
            <Navbar />
            <Introduction />
            <Expertise />
            <Partners />
            <Talents />
        </div>
    )
}

export default HomePage;