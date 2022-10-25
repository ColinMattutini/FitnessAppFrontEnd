import Card from "../../UI/Card";

const StepsGoal = (props) => {

    const stepsGoal = localStorage.getItem("STEPSGOAL");

    return(
        <Card onClick={props.showStepsModalHandler}>
            <h1>Steps Goal</h1>
            <h3>{stepsGoal} steps</h3>
        </Card>
    )
}

export default StepsGoal;