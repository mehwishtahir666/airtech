import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import Projects from './components/PortfolioPage';
import { Route, Routes } from 'react-router-dom';
import { ContactUs } from './components/contact/ContactUs';
import Solutuions from './components/solutions/solutions';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projects' element={<ContactUs/>} />
      </Routes>
        <Solutuions/>
    </div>
  );
}

export default App;
