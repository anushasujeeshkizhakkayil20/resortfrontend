import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Resort from './pages/Resort';
import Aboutus from './components/Aboutus';
import Contact from './pages/Contact';
import SightSeeings from './pages/SightSeeings';
import Gallerys from './pages/Gallerys';
import Auth from './components/Auth';
import Booking1 from './components/Booking1';
import Sidebars from './pages/Sidebars';
import ServiceResort from './pages/ServiceResort';
import ServiceTable from './pages/ServiceTable';
import MyServiceResort from './components/MyServiceResort';
import AddServicess from './components/AddServicess';
import Myview from './pages/Myview';
import AddSightview from './components/AddSightview';
import MybookingDetails from './pages/MybookingDetails';

function App() {
  return (


    <div>
 
     
     <Routes>
     
    
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Auth login/>}/>
      <Route path="/register" element={<Auth register/>}/>
      <Route path="/dashboard" element={<Dashboard Dashboard/>}/>
      <Route path="/resort" element={<Resort/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallerys/>}/>
      <Route path="/sightseeing" element={<SightSeeings/>}/>
      <Route path="/bookinglogin" element={<Booking1 login/>}/>
      <Route path="/bookingregister" element={<Booking1 bookingregister/>}/>
      <Route path="/sidebar" element={<Sidebars/>}/>
      <Route path="/serviceresort" element={<ServiceResort/>}/>
      <Route path="/myservice" element={<MyServiceResort/>}/>
      <Route path="/addservice" element={<AddServicess/>}/>
      <Route path="/myview" element={<Myview/>}/>
      <Route path="/addsight" element={<AddSightview/>}/>
      <Route path="/bookingdetails" element={<MybookingDetails/>}/>
      

      

     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
