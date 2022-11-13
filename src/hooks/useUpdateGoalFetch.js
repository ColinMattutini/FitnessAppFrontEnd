import { useContext } from "react";
import AuthContext from "../context/user-auth";


const useUpdateGoalFetch = () => {

    const authCtx = useContext(AuthContext);
        
        const updateGoalFetch =  async (goalNumber, goalType ) => {
        try{
            const response = fetch(
                "https://fitness-go.herokuapp.com/api/goal/"+authCtx.UUID,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        goalNumber: goalNumber,
                        goalType: goalType,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                       
                    },
                }
            )
            
            // setData(await response.JSON());
            // console.log(data);
        }
        catch{

        }
        }
        return{updateGoalFetch};
    
}

export default useUpdateGoalFetch;