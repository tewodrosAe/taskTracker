import useUserContext from "./useUserContext";
import {useState} from 'react'

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useUserContext()
    const signup = async(username,email,password) =>{
        setError(null)
        setIsLoading(true)
        const user = await fetch("http://localhost:5000/api/v1/user/signup",{
            method:"POST",
            body:JSON.stringify({username,email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const userJson = await user.json()
        
        if(!user.ok){
            setIsLoading(false)
            setError(userJson.error)
        }
        if(user.ok){
            localStorage.setItem('user',JSON.stringify(userJson))
            dispatch({type:"LOGIN",payload:userJson})
            setIsLoading(false)
        }
    }
    return {error,isLoading,signup}
}