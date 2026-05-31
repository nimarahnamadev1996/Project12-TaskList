import React, { useReducer, useState } from 'react'
import Task from './Task';

const TaskList = () => {

    const initialState=[];

    function createNewTask(name){
       return {id:Date.now(),name:name,complete:false}
   }

    const reducer = (state,action) => {

        switch(action.type){

            case 'add-task':
                return [...state, createNewTask(action.payload.name)];

            case 'toggle-task':
                return state.map((task) => {
                    if(task.id === action.payload.id){
                        return{...task,complete: !task.complete}
                    }
                })
                
              case 'delete-task': 
                return state.filter((task) => task.id !== action.payload.id)  

             default:
              return state;   
        }

    }


  

    const [state,dispatch] = useReducer(reducer,initialState)

    const [taskName,setTaskName]=useState("");


    const handleSubmit = (e) => {
       e.preventDefault();

       if(taskName.trim() === "") return;
       dispatch({type: 'add-task', payload: {name: taskName}})

       setTaskName('')

    }

  return (
    <div className="task-list-container">

        <form className="task-form" onSubmit={handleSubmit}>
              <label htmlFor="task-input" className='task-label'>Add Task</label>

              <input
               type="text" 
               className="task-input" 
               id="task-input"
               placeholder='Enter your task'
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}/>

               <button className="task-submit-btn">Add</button>
        </form>


        <div className="task-list">
            {
                state.map((task) => (
                    <Task key={task.id} task={task} dispatch={dispatch}/>
                ))
            }
        </div>
    </div>
  )
}

export default TaskList