import "./App.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import RegistrationForm from './Components/RegistrationForm';
import Frontpage from './Components/Frontpage';
import Admin from './Dashboards/AdminComponents/Admin';
import Navbar from './Components/Navbar';
import Participant from "./Dashboards/ParticipantDashboard/Participant";
import Panelist from "./Dashboards/PanelistDashboard/Panelist";
import Judge from "./Dashboards/JugdeComponents/Judge";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Frontpage/>}/>
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/AdminDashboard" element={<Admin />} />
          <Route path="/participant" element={<Participant />} />
        <Route path="/panelist" element={<Panelist />} />
        <Route path="/judge" element={<Judge />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
