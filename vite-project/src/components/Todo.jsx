import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])


const handleSubmit= (e)=>{
    e.preventDefault()
    setTasks([...tasks, task])
    setTask('')

}

  return (
    <div className='h-[50vh]'>
<input type="text" onChange={(e)=>{setTask(e.target.value)}} />
<button onClick={handleSubmit}>Add Task</button>

<div className='display'>
<ul>
    {
        tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))
    }
</ul>
</div>

    </div>
  )
}

export default Todo