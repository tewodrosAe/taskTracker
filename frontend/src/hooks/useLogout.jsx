import useUserContext from "./useUserContext";
import { useTaskContext } from "./useTaskContext";

const useLogout = () => {
    const {dispatch:taskDispatch} = useTaskContext()
    const {dispatch} = useUserContext()
    const logout = () =>{
        localStorage.removeItem('user')
        dispatch({type:"LOGOUT"})
        taskDispatch({type:'SET_TASK',payload:null})
    }
    return logout
}

export default useLogout