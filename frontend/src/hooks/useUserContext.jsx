import { useContext } from "react";
import { UserContext } from "../context/userContext";

 const useUserContext = () =>{
    const context = useContext(UserContext)

    if(!context){
        throw Error("outside user provider")
    }
    
    return context
}

export default useUserContext