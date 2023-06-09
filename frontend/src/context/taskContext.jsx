import { createContext, useReducer } from "react";

export const TaskContext = createContext()

export const taskDispatcher = (state,action) =>{
    switch(action.type){
        case "CREATE_TASK":
            return {tasks: [action.payload,...state.tasks]}
        case "DELETE_TASK":
            return {tasks : state.tasks.filter(t => t._id !== action.payload._id)}
        case "SET_TASK":
            return {tasks : action.payload}
        default:
            return state
    }
}

export const TaskProvider = ({children}) => {
    const [state,dispatch] = useReducer(taskDispatcher,{tasks: null})
    return(
        <TaskContext.Provider value={{...state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

