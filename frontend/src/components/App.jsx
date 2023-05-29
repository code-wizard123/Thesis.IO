import Chat from './Chat';
import Login from './Login';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage('id');

  return(
    <>
    {id ? <Chat id={id}/> : <Login onIdSubmit={setId}/>}
    
    </>
    
  );
}

export default App
