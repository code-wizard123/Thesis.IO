import Chat from './Chat';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    <div className="w-100">
      {id ? <Chat id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}

export default App
