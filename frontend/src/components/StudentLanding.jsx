import React from 'react'
import landingCSS from '../css/Landing.module.css'
import Todo from './Todo'

const StudentLanding = () => {
  return (
    <div className={landingCSS.outer}>
      <nav className={landingCSS.thesisnav}>
        <div className={landingCSS.navlinks}>
          <div className={landingCSS.navheading}>Thesis.IO</div>
          <div className={landingCSS.navlink}>Thesis Progress</div>
          <div className={landingCSS.navlink}>Connect with Mentor</div>
          <div className={landingCSS.navlink}>Peer Network</div>
          <div className={landingCSS.navimage}></div>
        </div>
      </nav>
      <div className={landingCSS.maincontent}>
        <div className={landingCSS.dashboard}>
          <h1 className={landingCSS.dashheading}>
          Hey, Raunak!
          </h1>
          <div className={landingCSS.dashlinks}>
            <div className={landingCSS.dashlink}><h3>Update Thesis</h3></div>
            <div className={landingCSS.dashlink}><h3>To Do List</h3></div>
          </div>
        </div>
        <div className={landingCSS.centersection}>
          <Todo />
        </div>
        <div className={landingCSS.chat}>
          
        </div>
      </div>
    </div>
  )
}

export default StudentLanding
