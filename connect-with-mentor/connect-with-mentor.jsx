import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaUser, FaListAlt, FaCar, FaHistory, FaEnvelope } from 'react-icons/fa';
import { RiCaravanFill } from 'react-icons/ri';
import { CiCircleChevUp } from 'react-icons/ci';

function ConnectWithMentor() {
  return (
    <div
      style={{
        border: 'solid 1px black',
        alignSelf: 'center',
        marginLeft: '1vw',
        marginTop: '1vh',
        height: '98vh',
        width: '98vw',
        backgroundColor: '#E6E6FA',
        overflowX: 'hidden',
        overflowY: 'hidden',
        backgroundColor: '#F3F1F5',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
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
                  Update Thesis
                </h5>
              </button>
            </li>
            <li style={{ border: 'solid 1px white', height: '7vh', width: '13vw', marginTop: '2vh' }}>
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                <h5
                  style={{
                    fontWeight: '700',
                    fontSize: 'large',
                    color: 'white',
                    marginTop: '2vh',
                    paddingLeft: '4vw',
                  }}
                >
                  Hey, Name!
                </h5>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className="outer-container"
          style={{
            backgroundColor: '#E6E6FA',
            marginLeft: '1vw',
            marginTop: '1vh',
            border: 'solid 1px black',
            height: '85vh',
            width: '47.5vw',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontWeight: '700', marginBottom: '-3vh' }}>Meeting Request Form</h2>
          <form
            style={{
              padding: '3vw',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              fontWeight: '700',
              fontSize: 'large',
            }}
          >
            <label htmlFor="meeting-purpose" style={{ color: '#5C469C' }}>
              Meeting Purpose:
            </label>
            <input
              type="text"
              id="meeting-purpose"
              name="meeting-purpose"
              required
              style={{
                backgroundColor: '#F8F8FF',
                marginBottom: '4vh',
                border: '1px solid #8B008B',
                padding: '2vh',
              }}
            />

            <label htmlFor="meeting-date" style={{ color: '#5C469C' }}>
              Preferred Date:
            </label>
            <input
              type="date"
              id="meeting-date"
              name="meeting-date"
              required
              style={{
                backgroundColor: '#F8F8FF',
                marginBottom: '4vh',
                border: '1px solid #8B008B',
                padding: '2vh',
              }}
            />

            <label htmlFor="meeting-time" style={{ color: '#5C469C' }}>
              Preferred Time:
            </label>
            <input
              type="time"
              id="meeting-time"
              name="meeting-time"
              required
              style={{
                backgroundColor: '#F8F8FF',
                marginBottom: '4vh',
                border: '1px solid #8B008B',
                padding: '2vh',
              }}
            />

            <label htmlFor="agenda-topics" style={{ color: '#5C469C' }}>
              Agenda Topics:
            </label>
            <textarea
              id="agenda-topics"
              name="agenda-topics"
              required
              style={{
                backgroundColor: '#F8F8FF',
                marginBottom: '4vh',
                border: '1px solid #8B008B',
                padding: '1vh',
              }}
            ></textarea>

            <button
              type="submit"
              value="Request Meeting"
              style={{
                backgroundColor: '#5C469C',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '3px',
                fontWeight: '700',
                fontSize: 'large',
              }}
            >
              Request Meeting
            </button>
          </form>
        </div>
        <div
          style={{
            height: '85vh',
            width: '47.5vw',
            border: 'solid 1px black',
            marginLeft: '1vw',
            marginTop: '1vh',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            backgroundColor: '#E6E6FA',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontWeight: '700', marginBottom: '-3vh' }}>Meeting Schedule</h2>
        </div>
      </div>

      {/* //<div style={{width:'98vw', backgroundColor:'white', borderRadius:"0px 0px 10px 10px", color:'black',height:'7vh',textAlign:'center'}}><CiCircleChevUp style={{transform:'scale(2.5)',marginTop:'2vh'}}/></div> */}
    </div>
  );
}

export default ConnectWithMentor;
