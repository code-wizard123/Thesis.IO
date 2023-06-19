import React from 'react'
import './css/landing.css'
import Todo from '../ToDo/Todo'

const Landing = () => {
  return (
    <div className='outer'>
      <nav className='thesis-nav'>
        <div className='nav-links'>
          <div className='nav-heading'>Thesis.IO</div>
          <div className='nav-link'>Thesis Progress</div>
          <div className='nav-link'>Connect with Mentor</div>
          <div className='nav-link'>Peer Network</div>
          <div className='nav-image'></div>
        </div>
      </nav>
      <div className='main-content'>
        <div className='dashboard'>
          <h1 className='dash-heading'>
          Hey, Raunak!
          </h1>
          <div className='dash-links'>
            <div className='dash-link'><h3>Update Thesis</h3></div>
            <div className='dash-link'><h3>To Do List</h3></div>
          </div>
        </div>
        <div className='center-section'>
          <Todo />
        </div>
        <div className="chat">
          
        </div>
      </div>
    </div>
  )
}

export default Landing
