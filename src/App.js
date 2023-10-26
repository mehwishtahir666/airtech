import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AppServices from './components/appServices/appServices';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/AppServices" element={ <AppServices/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
