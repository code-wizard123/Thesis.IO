import Chat from './components/Chat';
import Login from './components/Login';
import Landing from './components/landing/Landing'
import useLocalStorage from './hooks/useLocalStorage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Chat" element={<Chat />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App
