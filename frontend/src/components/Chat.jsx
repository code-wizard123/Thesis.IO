import io from 'socket.io-client';
import { useState, useEffect } from 'react';
const socket = io.connect("http://localhost:3000")

function Chat({id}){
    const [message, setMessage] = useState("");
    const [messageRecieved, setMessageRecieved] = useState("");
    const [idRecieved, setIdRecieved] = useState("");
    const sendMessage = () => {
        socket.emit("send_message", { id, message });
    }

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessageRecieved(data.message);
            setIdRecieved(data.id);
        })
    }, [socket])

    return (
        <div className="chat">
            {id}
            <input placeholder="Message..." 
            onChange={(event) => {
                setMessage(event.target.value);
            }}/>
            <button onClick={sendMessage}>Send</button>
            <h1> Messages</h1>
            {idRecieved}:{messageRecieved}
        </div>
    )
}

export default Chat