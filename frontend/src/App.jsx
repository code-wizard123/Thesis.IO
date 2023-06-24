import Chat from './components/Chat';
import Landing from './components/Landing'
import Home from './components/Home'

import StudentLogin from './components/StudentLogin'
import StudentSignup from './components/StudentSignup';

import MentorLogin from './components/MentorLogin';
import MentorSignup from './components/MentorSignup';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />

        <Route path="/mentor/login" element={<MentorLogin />} />
        <Route path="/mentor/signup" element={<MentorSignup />} />

      </Routes>
    </Router>
  );
}

export default App
