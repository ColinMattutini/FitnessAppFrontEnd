import Card from "../../UI/Card";

const WaterGoal = () => {

    const waterGoal = localStorage.getItem("WATERGOAL");

    return(
        <Card>
            <h1>Water Goal</h1>
            <h2>{waterGoal} litres</h2>
        </Card>
    )
}

export default WaterGoal;