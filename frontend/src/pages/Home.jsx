import { useEffect, useState } from "react"
import Tasks from "../components/Tasks"
import {AiFillPlusCircle} from 'react-icons/ai'
import { useTaskContext } from "../hooks/useTaskContext"

export default function Home () {
    const [task,setTask] = useState('')
    const [day,setDay] = useState('')
    const [time,setTime] = useState('')
    const [description,setDescription] = useState('')
    const [taskType,setTaskType] = useState('')
    const [urgency,setUrgency] = useState('')
    const [plusClicked,setPlusClicked] = useState(false)
    const {tasks,dispatch} = useTaskContext()
    let number

    useEffect(() => {
        const setter = async () =>{
            const taskCol = await fetch('http://localhost:5000/api/v1/task')
            const json = await taskCol.json()
            dispatch({type:'SET_TASK',payload:json})
            if(taskCol.ok){
            }
        }
        setter()
    },[dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            "task =" , task
            ,"day =" , day,
            "time=",time,
            "description=",description,
            "task type =",taskType,
            "urgency =",urgency 
        )
    }
    const handleColorClick = (e) => {
        const colorChosen = e.target.className.split(" ")[0]
        setUrgency(colorChosen)
    }
    const handlePlus = () => {
        setPlusClicked(prev => !prev)
    }
    
    return(
        <div className={plusClicked ? "home-wrapper scroll-stop" : "home-wrapper"}>
        <div className="home">
            <div className="details">
                <span>Welcome back, Tedy</span>
                <p>You've got <b>7</b> tasks coming up.</p>
            </div>
            <div className="tasks">
                {tasks && tasks.map(t => <Tasks key={t._id} task={t}/>)}
            </div>
            <AiFillPlusCircle size={50} className={plusClicked?'cross-icon':'plus-icon'} onClick={handlePlus}/>
        </div>
        <div className={plusClicked ? "task-form" : "hidden"}>
            <form onSubmit={handleSubmit} className='auth auth-center' >
                
                <label>Task name:</label>
                <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
                <label>Description:</label>
                <input
                type='text'
                maxLength={200}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <label>Task type:</label>
                <input
                type='text'
                maxLength={50}
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                />
                <label>Date:</label>
                <input
                type='datetime-local'
                value={number}
                onChange={(e) => 
                    {
                        number = e.target.value
                        setTime(number.split('T')[1])
                        setDay(number.split('T')[0])
                    }
                }
                />
                <label>Urgency:</label>
                <div className="colors">
                    <div className={urgency == 'red' ? 'red color-pallet color-chosen':'red color-pallet'} onClick={handleColorClick}>urgent</div>
                    <div className={urgency == 'green' ? 'green color-pallet color-chosen':'green color-pallet'}  onClick={handleColorClick}>fine</div>
                    <div className={urgency == 'blue' ? 'blue color-pallet color-chosen':'blue color-pallet'}  onClick={handleColorClick}>chill</div>
                </div>
                <button>Create task</button>
            </form>
        </div>
        </div>
    )
}