import React, { useRef, useState } from 'react'
import '../stylesheets/Chat.css'
import { Button, Form } from 'react-bootstrap'

export default function Chat({id}) {
  let defMessages = [
    {
      id: 1,
      yourMessage: true,
      content: "Hey!",
    },
    {
      id: 2,
      yourMessage: false,
      content: "Hey There"
    },
    {
      id: 3,
      yourMessage: false,
      content: "How are you"
    },
    {
      id: 4,
      yourMessage: true,
      content: "I'm fine!"
    },
    {
      id: 5,
      yourMessage: true,
      content: "Hey!",
    },
    {
      id: 6,
      yourMessage: false,
      content: "Hey There"
    },
    {
      id: 7,
      yourMessage: false,
      content: "How are you"
    },
    {
      id: 8,
      yourMessage: true,
      content: "I'm fine!"
    },
    {
      id: 9,
      yourMessage: true,
      content: "Hey!",
    },
    {
      id: 10,
      yourMessage: false,
      content: "Hey There"
    },
    {
      id: 11,
      yourMessage: false,
      content: "How are you"
    },
    {
      id: 12,
      yourMessage: true,
      content: "I'm fine!"
    }
  ];

  const [messages, setMessages] = useState(defMessages)
  const msgRef = useRef();
  function displayMessage(){
    console.log(msgRef.current.value);
  }

  function handleSubmit(e){
    let chatwindow = document.getElementsByClassName("chats-all");
    e.preventDefault();
    let currMessageId = messages.length + 1
    let newMessage = {
      id: currMessageId,
      content: msgRef.current.value,
      yourMessage: true,
    }
    setMessages([newMessage, ...messages])
    msgRef.current.value = "";
  }

  return (
    <div className="w-100 d-flex justify-content-center">
    <div className='outer-chat shadow-box bg-primary'>
        <h2 className='mentor-chat-heading'><font color="white">Mentor Chat</font></h2>

        <div className="chats-all">
          {
            messages.map((message) => {
              return (
                <p key={message.id} className={"message " + (message.yourMessage ? "your-message" : "opp-message")}>
                  {message.content}
                </p>
              )
            }) 
          }
        </div>

        <form onSubmit={handleSubmit} className='msg-form'>
          <input type='text' className="msg-input" ref={msgRef} />
          <button className="msg-submit" onClick={displayMessage} type="submit">Send</button>
        </form>
    </div>
    </div>
  )
}
