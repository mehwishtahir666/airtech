import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { ContactUs } from './components/contact/ContactUs';
import { ServicesPage } from './components/services/ServicesPage';
import { AboutUs } from './components/aboutUs/AboutUs';
import { Portfolio } from './components/portfolio/Portfolio';
import { SeoService } from './components/SeoService';
import { Web } from './components/Web';
import { TestimonialPage } from './components/TestimonialPage';
import { WebdevelopmentService } from './components/WebdevelopmentService';
import { MarketingService } from './components/MarketingService';
import { AppService } from './components/AppService';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/testimonial' element={<TestimonialPage/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/services/seo' element={<SeoService />} />
        <Route path='/service/webdevelopment' element={<WebdevelopmentService/>} />
        <Route path='/service/marketing' element={<MarketingService/>} />
        <Route path='/service/appdevelopment' element={<AppService/>} />
      </Routes>
    </div>
  );
}

export default App;
