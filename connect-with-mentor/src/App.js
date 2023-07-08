import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ConnectWithMentor from './components/javascripts/connect-with-mentor';
import StudentCalendar from "./components/javascripts/calendar";

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/connect-with-mentor" element={ConnectWithMentor} />
    <Route exact path="/connect-with-mentor-calendar" element={StudentCalendar} />
    </Routes>
    </Router>



    // <div className="App">
    //   {/* <ConnectWithMentor></ConnectWithMentor> */}
    //   <Calendar></Calendar>
    // </div>
  );
}

export default App;
