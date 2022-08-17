import './App.css';
import Events from './components/Events/Events';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import "swiper/css/bundle";
import Servise from './components/Servise/Servise';
import Interesting from './components/Interesting/Interesting';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      
          <Navbar/>
          <Home/> 
          <Events/>
          <Servise/>  
          <Interesting/>
          <ContactUs/>
      
        </div>
  );
}

export default App;
