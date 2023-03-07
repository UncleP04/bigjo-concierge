import React from "react"
import Introduction from "../../Components/Introduction";
import Navbar from "../../Components/Nav";
import style from './style.module.css'

const HomePage = () => {

    return (
        <div>
            <Navbar />
            <Introduction />
        </div>
    )
}

export default HomePage;