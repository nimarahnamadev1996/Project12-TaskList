import React from 'react'

const Task = ({task,dispatch}) => {
  return (
    <div className="task-item">
        <span className={`task-name ${task.complete ? 'complete': ''}`}>
            {task.name}
        </span>

        <button
          className="task-action-btn complete-btn"
          onClick={() => dispatch({type: 'toggle-task', payload: {id:task.id}})}>
           {task.complete?'Undo':'Complete'}
        </button>

        <button
         className="task-action-btn delete-btn"
         onClick={() => dispatch({type:'delete-task', payload: {id: task.id}})}>
            Delete
        </button>
    </div>
  )
}

export default Task