import React from 'react'
import TodoCSS from '../css/Todo.module.css'
import { FaCheck } from 'react-icons/fa'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Todo = () => {
  const handleDeleteTask = () => {
    console.log("Marked Task")
  }

  const handleAddTask = () => {
    console.log("Added Task")
  }

  const handleDoneTask = (e) => {
    console.log("DONE!");
    console.log(e)
  }

  return (
    <div className={TodoCSS.tododiv}>
      <div className={TodoCSS.buttons}>
        <Popup trigger={<div className={`${TodoCSS.button} ${TodoCSS.addtaskbtn}`}>Add Task</div>} modal>
          {close => (
            <div className={TodoCSS.modal}>
              <button className={TodoCSS.close} onClick={close}>
                &times;
              </button>
              <div className={TodoCSS.header}>Modal Title</div>
              <div className={TodoCSS.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
              </div>
            </div>
          )}
        </Popup>
        <div className={`${TodoCSS.button} ${TodoCSS.deletetaskbtn}`} onClick={handleDeleteTask}>Delete Task</div>
      </div>
      <div className={TodoCSS.list}>
        <div className={TodoCSS.listitem}>
          <h3>Task Name</h3>
          <h5>22/06/2023 - <font color="red">26/06/2023</font></h5>
          <button onClick={(e) => handleDoneTask(e)} className={TodoCSS.checktaskbtn}><FaCheck className={TodoCSS.checklogo} /></button>
          <p>Content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora nisi deleniti rem sunt exercitationem fugit commodi reiciendis quas laudantium laboriosam id corporis voluptas, nulla dolor nobis sapiente numquam assumenda?</p>
        </div>
        <div className={TodoCSS.listitem}>
          <h3>Task Name</h3>
          <h5>22/06/2023 - <font color="red">26/06/2023</font></h5>
          <button onClick={(e) => handleDoneTask(e)} className={TodoCSS.checktaskbtn}><FaCheck className={TodoCSS.checklogo} /></button>
        </div>
      </div>
    </div>
  )
}

export default Todo
