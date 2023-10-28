import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Whyus } from './components/Whyus';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Loader } from './components/Loader';
import Country from './components/Countries';
import Platforms from './components/Awards';

function App() {
  return (
    <div className="App">
      {/* <Loader/> */}
   <Banner/>
   <About/>
   <Services/>
   <Whyus/>
   <Testimonials/>
   {/* <Pricing/> */}
  <Platforms/>
   <Country/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
