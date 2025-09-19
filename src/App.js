import './App.css';
import LandingPage from './Components/LandingPage';
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import CarRepair from "./Components/CarRepair";
import NearbyCarWash from './Components/CarWash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Repair" element={<CarRepair/>} />
        <Route path="/Car-wash" element={<NearbyCarWash/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
