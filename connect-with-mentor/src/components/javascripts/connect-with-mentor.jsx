import React from 'react';
import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaUser, FaListAlt, FaCar, FaHistory, FaEnvelope } from 'react-icons/fa';
import { RiCaravanFill } from 'react-icons/ri';
import { CiCircleChevUp } from 'react-icons/ci';
import VideoCall from "../assets/img/video-call.png";
import Calendar from "../assets/img/Calendar.png";
import Download from "../assets/img/Download.png";
import Profile from "../assets/img/profile.png";

function ConnectWithMentor() {

  const [scheduleMeetButtonClicked, setScheduleMeetButtonClicked] = useState(false);
  const [calendarButtonClicked, setCalendarButtonClicked] = useState(false);

  const handleScheduleMeet = async (event) => {
    event.preventDefault();
    setScheduleMeetButtonClicked(true);
    setCalendarButtonClicked(false);   
  };

  const handleCalendar = async (event) => {
    event.preventDefault();
    setScheduleMeetButtonClicked(false);
    setCalendarButtonClicked(true);      
  };




  return (
    <div
  style={{
    border: 'solid 1px black',
    alignSelf: 'center',
    marginLeft: '1vw',
    marginTop: '1vh',
    height: '98vh',
    width: '98vw',
    backgroundColor: '#EAEAEA',
    overflowX: 'hidden',
    overflowY: 'hidden',
    backgroundColor: '#F3F1F5',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    // Mobile display media query
    '@media (max-width: 600px)': {
      width: '100vw',
      height: '100vh',
    },
  }}
>
      <div
        className="navbar-header"
        style={{ height: '10vh', border: 'solid 1px black' }}
      >
        <div
          style={{
            textAlign: 'left',
            marginTop: '-3vh',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row' }}>
            <li>
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                <h4
                  style={{
                    fontWeight: '700',
                    fontSize: 'xxx-large',
                    color: 'white',
                    marginTop: '1vh',
                    marginRight: '2vw',
                  }}
                >
                  THESIS.IO
                </h4>
              </button>
            </li>
            <li>
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                <h5
                  style={{
                    fontWeight: '700',
                    fontSize: 'large',
                    color: 'white',
                    marginRight: '5vw',
                  }}
                >
                  Thesis Progress
                </h5>
              </button>
            </li>
            <li>
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                <h5
                  style={{
                    fontWeight: '700',
                    fontSize: 'large',
                    color: 'white',
                    marginRight: '5vw',
                  }}
                >
                  Connect With Mentor
                </h5>
              </button>
            </li>
            <li>
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                <h5
                  style={{
                    fontWeight: '700',
                    fontSize: 'large',
                    color: 'white',
                    marginRight: '5vw',
                  }}
                >
                  Peer Network
                </h5>
              </button>
            </li>
            
            <li style={{marginLeft:"23vw"}}>
            <div style={{ borderRadius: "50%", height: "9vh", width: "9vh", backgroundColor: "transparent", marginTop: "1vh", marginRight: "-5vw", border: "solid 1px white", overflow: "hidden" }}>
  <img src={Profile} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>

            </li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{width:'20%',height:"90vh",alignSelf:'center',display:'flex',flexDirection:'column',backgroundColor:"#EAEAEA"}}>
          <h3 style={{color:'black',fontWeight:'700', fontSize:'xx-large',textAlign:'left',padding:'1vw',marginTop:'2vh'}}>Hey, Raunak!</h3>    
          <div style={{backgroundColor:scheduleMeetButtonClicked?'white':'transparent',marginBottom:"2vh",display:"flex",flexDirection:'row',width:"19vw"}}>
            <div style={{backgroundColor:scheduleMeetButtonClicked?"#8237CB":'transparent',color:'transparent',borderRadius:'0px 10px 10px 0px',height:'9vh'}}>h</div>
            <img src={VideoCall} style={{height:"6vh",width:"6vh",marginTop:"2vh",marginLeft:"1vw"}} onClick={handleScheduleMeet}></img>
            <button style={{height:'8vh',width:"100%",textAlign:"left",backgroundColor:scheduleMeetButtonClicked?'white':'transparent',border:'none'}} onClick={handleScheduleMeet}><h3 style={{fontWeight:'700',fontSize:'x-large',marginTop:"2vh",paddingLeft:"0.5vw",marginBottom:"2vh"}}><a href='/connect-with-mentor'>Schedule Meet</a></h3></button>
          </div>

          <div style={{backgroundColor:calendarButtonClicked?'white':'transparent',marginBottom:"2vh",display:"flex",flexDirection:'row',width:"19vw",marginTop:'2vh'}}>
          <div style={{backgroundColor:calendarButtonClicked?"#8237CB":'transparent',color:'transparent',borderRadius:'0px 10px 10px 0px',height:'9vh'}}>h</div>
            <img src={Calendar} style={{height:"6vh",width:"6vh",marginTop:"1vh",marginLeft:"1vw"}} onClick={handleCalendar}></img>
            <button style={{height:'8vh',width:"100%",textAlign:"left",backgroundColor:calendarButtonClicked?"white":"transparent",border:'none'}} onClick={handleCalendar}><h3 style={{fontWeight:'700',fontSize:'x-large',marginTop:"1.5vh",paddingLeft:"0.5vw",marginBottom:"2vh"}}><a href='/connect-with-mentor-calendar'>Calendar</a></h3></button>
          </div>
          
        </div>  
        <div style={{width:'50%',alignSelf:'center',height:'90vh',backgroundColor:"#EAEAEA"}}>
          <div style={{backgroundColor:"white",margin:'2vh',height:"93%",borderRadius:"20px"}}>
          <form
            style={{
              padding: '1vw',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              fontWeight: '700',
              fontSize: 'large',
            }}
          >
            <label htmlFor="meeting-purpose" style={{ color: 'black',textAlign:'left',fontSize:"x-large" }}>
              Meeting Purpose:
            </label>
            <input
              type="text"
              id="meeting-purpose"
              name="meeting-purpose"
              placeholder='Enter the Meeting Purpose'
              required
              style={{
                backgroundColor: '#EAEAEA',
                marginBottom: '4vh',
                border:'none',
                height:"4vh",
                fontSize:'large',
                padding: '2vh',
                '::placeholder': {  // Use double colons (::) for pseudo-elements
                  fontSize: 'x-large', // Adjust the font size as per your requirement
                  color: 'red',     // Adjust the color as per your preference
                },
              }}
            />

            <label htmlFor="meeting-purpose" style={{ color: 'black',textAlign:'left',fontSize:"x-large" }}>
              Preferred Date:
            </label>
            <input
  type="date"
  id="meeting-date"
  name="meeting-date"
  placeholder='Enter the Preferred Meeting Date'
  required
  style={{
    backgroundColor: '#EAEAEA',
    marginBottom: '4vh',
    border: 'none',
    height: '4vh',
    padding: '2vh',
    fontSize:'large',
    '::placeholder': {  // Use double colons (::) for pseudo-elements
      fontSize: 'x-large', // Adjust the font size as per your requirement
           // Adjust the color as per your preference
    },
  }}
/>


<label htmlFor="meeting-purpose" style={{ color: 'black',textAlign:'left',fontSize:"x-large" }}>
              Preferred Time:
            </label>
            <input
              type="time"
              id="meeting-time"
              name="meeting-time"
              placeholder='Enter the Preferred Meeting Time'
              required
              style={{
                backgroundColor: '#EAEAEA',
                marginBottom: '4vh',
                border:'none',
                fontSize:'large',
                height:"4vh",
                padding: '2vh',
                '::placeholder': {  // Use double colons (::) for pseudo-elements
                  fontSize: 'x-large', // Adjust the font size as per your requirement
                      // Adjust the color as per your preference
                },
              }}
            />

<label htmlFor="meeting-purpose" style={{ color: 'black',textAlign:'left',fontSize:"x-large" }}>
              Agenda Topics:
            </label>
            <textarea
              id="agenda-topics"
              name="agenda-topics"
              placeholder='Enter the Agenda Topics'
              required
              style={{
                backgroundColor: '#EAEAEA',
                marginBottom: '4vh',
                border: 'none',
                fontSize:'large',
                height:"8vh",
                padding: '1vh',
                paddingTop:'4vh',
                '::placeholder': {  // Use double colons (::) for pseudo-elements
                  fontSize: 'x-large', // Adjust the font size as per your requirement
                    // Adjust the color as per your preference
                },
              }}
            ></textarea>

            <button
              type="submit"
              value="Request Meeting"
              style={{
                backgroundColor: '#8237CB',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '3px',
                fontWeight: '700',
                fontSize: 'large',
                marginBottom:"-2vh",
                width:"10vw",
                alignSelf:"center",
              }}
            >
              Submit
            </button>
          </form>

        

          </div>
        </div> 
        <div style={{width:'30%',height:'90vh',display:'flex',flexDirection:"column"}}>
          <h1 style={{fontWeight:'700',textAlign:'left',marginLeft:'1vw',marginTop:'0.5vh'}}>Version History</h1>
          <h3 style={{textAlign:'left',marginLeft:'1vw',color:"black",marginTop:"-3vh",fontWeight:"400"}}>Select the Thesis Version to attach to Meeting Application.</h3>
          <div style={{width:"94%",backgroundColor:"white",marginLeft:"1vw",height:"10vh",borderRadius:"5px",textAlign:'left',display:"flex",flexDirection:'row'}}>
            <div>
            <p style={{color:"black",fontSize:'x-large',marginTop:'0vh',marginLeft:"1vw",fontWeight:"700"}}>Version 3</p>
            <p style={{textAlign:'left',marginTop:'-3vh',marginLeft:"1vw"}}>Date Created: 27/06/2023</p>
            </div>
            <div>
              <img src={Download} style={{height:'5vh',width:"5vh",paddingLeft:'9vw',paddingTop:'3vh'}}></img>
            </div>     
          </div>

           <div style={{width:"94%",backgroundColor:"white",marginLeft:"1vw",marginTop:"2vh",height:"10vh",borderRadius:"5px",textAlign:'left',display:"flex",flexDirection:'row'}}>
            <div>
            <p style={{color:"black",fontSize:'x-large',marginTop:'0vh',marginLeft:"1vw",fontWeight:"700"}}>Version 2</p>
            <p style={{textAlign:'left',marginTop:'-3vh',marginLeft:"1vw"}}>Date Created: 27/06/2023</p>
            </div>
            <div>
              <img src={Download} style={{height:'5vh',width:"5vh",paddingLeft:'9vw',paddingTop:'3vh'}}></img>
            </div>     
          </div> 

          <div style={{width:"94%",backgroundColor:"white",marginLeft:"1vw",marginTop:"2vh",height:"10vh",borderRadius:"5px",textAlign:'left',display:"flex",flexDirection:'row'}}>
            <div>
            <p style={{color:"black",fontSize:'x-large',marginTop:'0vh',marginLeft:"1vw",fontWeight:"700"}}>Version 1</p>
            <p style={{textAlign:'left',marginTop:'-3vh',marginLeft:"1vw"}}>Date Created: 27/06/2023</p>
            </div>
            <div>
              <img src={Download} style={{height:'5vh',width:"5vh",paddingLeft:'9vw',paddingTop:'3vh'}}></img>
            </div>     
          </div> 


        </div>         
        
      </div>

      {/* //<div style={{width:'98vw', backgroundColor:'white', borderRadius:"0px 0px 10px 10px", color:'black',height:'7vh',textAlign:'center'}}><CiCircleChevUp style={{transform:'scale(2.5)',marginTop:'2vh'}}/></div> */}
    </div>
  );
}

export default ConnectWithMentor;
