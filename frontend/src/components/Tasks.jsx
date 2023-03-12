import { useTaskContext } from "../hooks/useTaskContext"
import useUserContext from "../hooks/useUserContext"
import fromDistanceToNow from "date-fns/formatDistanceToNow"

export default function Tasks({task}) {
    const day = new Date()
    const {dispatch} = useTaskContext()
    const {user} = useUserContext()
    const handleDelete = async() => {
        const resp = await fetch(`http://localhost:5000/api/v1/task/${task._id}`,{
            method:'DELETE',
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
        }) 
        if(resp.ok){
            dispatch({type:'DELETE_TASK',payload:task})
        }
    }
    return(
        <div className="task">
            <div className="task-wrapper">
                <div className="task-one-wrapper">
                    <span className="task-name">{task.title}</span>
                </div>
                <span className="task-description">{task.description}</span>
                <div className="task-tag">{task.type}</div>
            </div>
            <div className={`task-urgency ${task.urgency}`}>
                <div className="task-urgency-one">
                </div>
            </div>
            <div className="task-date">
                <div className="task-duration">
                    {task.day} | {task.time}
                </div>
                <div className="countdown">
                    05|23|02 {day.now}
                </div>
                <div className="created-time">
                    {fromDistanceToNow(new Date(task.createdAt),{addSuffix:true})}
                </div>
            </div>
            <div className="buttons">
                <button type="button" className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}