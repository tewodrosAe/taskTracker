

export default function Tasks({task}) {
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
                    05|23|02
                </div>
                <div className="created-time">
                    {task.createdAt}
                </div>
            </div>
            <div className="buttons">
                <button type="button" className="delete">Delete</button>
                <button type="button" className="update">Change</button>
            </div>
        </div>
    )
}