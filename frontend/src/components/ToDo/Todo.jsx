import React from 'react'
import './css/Todo.css'

const Todo = () => {
  const handleMarkTask = () => {
    console.log("Marked Task")
  }

  const handleAddTask = () => {
    console.log("Added Task")
  }

  return (
    <div className='to-do-div'>
      <div className='buttons'>
        <div className="button mark-task-btn" onClick={handleMarkTask}>Mark Task</div>
        <div className="button add-task-btn" onClick={handleAddTask}>Add Task</div>
      </div>
      <div className='list'>
        TODO LIST
      </div>
    </div>
  )
}

export default Todo
