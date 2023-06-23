import Chat from './components/Chat';
import Landing from './components/Landing'
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
