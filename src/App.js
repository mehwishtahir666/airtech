import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import Projects from './components/PortfolioPage';
import { Route, Routes } from 'react-router-dom';
import { ContactUs } from './components/contact/ContactUs';
import { ServicesPage } from './components/services/ServicesPage';
import { AboutUs } from './components/aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/services' element={<ServicesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
