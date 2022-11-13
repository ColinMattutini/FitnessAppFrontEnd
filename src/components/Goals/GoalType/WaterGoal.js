import Card from "../../UI/Card";

const WaterGoal = (props) => {

    const waterGoal = localStorage.getItem("WATERGOAL");

    return(
        <Card onClick={props.showWaterModalHandler}>
            <h1>Water Goal</h1>
            <h2>{waterGoal} litres</h2>
        </Card>
    )
}

export default WaterGoal;