import { Fragment } from "react";
import Header from "../components/Header/Header";
import Welcome from "../components/Homepage/Welcome";

const WelcomePage = () => {
    return(
        <Fragment>
            <Header />
            <Welcome />
            
        </Fragment>

    );
};

export default WelcomePage;