import { Fragment } from "react"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import WorkoutHome from "../components/WorkoutHome/WorkoutHome"


const WorkoutPage = () => {
    return(
        <Fragment>
            <Header />
            <WorkoutHome />
            <NavBar />
        </Fragment>
    )
}

export default WorkoutPage;