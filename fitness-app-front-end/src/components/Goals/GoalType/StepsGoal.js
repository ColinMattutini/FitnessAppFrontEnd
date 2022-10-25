import Card from "../../UI/Card";

const StepsGoal = () => {

    const stepsGoal = localStorage.getItem("STEPSGOAL");

    return(
        <Card>
            <h1>Steps Goal</h1>
            <h3>{stepsGoal} steps</h3>
        </Card>
    )
}

export default StepsGoal;