
import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import RegistrationForm from './Components/RegistrationForm';
import Frontpage from './Components/Frontpage';
import Admin from './Dashboards/AdminComponents/Admin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Frontpage/>}/>
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/AdminDashboard" element={<Admin />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
