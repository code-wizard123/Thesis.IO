import Chat from './components/Chat';
import StudentLanding from './components/StudentLanding'
import Home from './components/Home'

import ProtectedStudentRoutes from './Protected/ProtectedStudentRoutes';

import StudentLogin from './components/StudentLogin'
import StudentSignup from './components/StudentSignup';

import MentorLogin from './components/MentorLogin';
import MentorSignup from './components/MentorSignup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        
        <Route element={<ProtectedStudentRoutes/>}>
          <Route path="/student/landing" element={<StudentLanding />} />
        </Route>

        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />

        <Route path="/mentor/login" element={<MentorLogin />} />
        <Route path="/mentor/signup" element={<MentorSignup />} />

      </Routes>
    </Router>
  );
}

export default App
