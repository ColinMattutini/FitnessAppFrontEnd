import { Fragment } from "react";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";
import NavBar from "../components/NavBar/NavBar";

const CalorieTrackerPage = () => {
    return (
    <Fragment>
        <Header />
        <Homepage />
        <NavBar />
    </Fragment>
        );
}

export default CalorieTrackerPage;