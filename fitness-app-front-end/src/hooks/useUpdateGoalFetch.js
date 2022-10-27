import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/user-auth";


const useUpdateGoalFetch = () => {

    const authCtx = useContext(AuthContext);
        
        const updateGoalFetch =  async (goalNumber, goalType ) => {
        try{
            const response = fetch(
                "http://localhost:8080/api/goal/"+authCtx.UUID,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        goalNumber: goalNumber,
                        goalType: goalType,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                       
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