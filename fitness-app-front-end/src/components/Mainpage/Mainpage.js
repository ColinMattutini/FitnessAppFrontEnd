import React, { Fragment } from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import classes from "./Mainpage.module.css"
import UserWelcome from "./UserWelcome";

const Mainpage = () => {
    return(
        <Fragment>
            <Header />
            <NavBar />
            
            <div className={classes.fillheight}>
                <UserWelcome />
                <div className={classes.calendarcenter}>
                
                </div>
            </div>
            
        </Fragment>
    )

}

export default Mainpage;