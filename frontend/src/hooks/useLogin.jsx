import { useState } from "react";
import useUserContext from "./useUserContext";

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useUserContext()
    const login = async (email,password) =>{
        setIsLoading(true)
        setError(null)
        const user = await fetch("http://localhost:5000/api/v1/user/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
        const resp = await user.json()

        if(!user.ok){
            setIsLoading(false)
            setError(resp.error)
        }
        if(user.ok){
            // local storage
            localStorage.setItem('user',JSON.stringify(resp))
            // context
            dispatch({type:"LOGIN",payload:resp})
            // change loading to false
            setIsLoading(false)
        }
    }
    return {login,error,isLoading}
}