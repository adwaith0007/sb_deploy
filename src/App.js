
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutUs from './components/Pages/AboutUs';
import Events from './components/Pages/Events';
import Home from './components/Pages/Home';
import { Routes, Route,  } from "react-router-dom";
import News from './components/Pages/News';
import ContactUs from './components/Pages/ContactUs';
import Faqs from './components/Pages/Faqs';
import Career from './components/Pages/Career';
import Blog from './components/Pages/Blog';
import FoodIndustry from './components/Pages/Seo_pages/FoodIndustry';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>

      <Route path="/home" element={<Home />} />

      <Route path="/aboutus" element={<AboutUs />} />

     

      <Route path="/events" element={<Events/>} />

      <Route path="/news" element={<News />} />

      <Route path="/contactUs" element={<ContactUs/>} />

      <Route path="/faqs" element={<Faqs/>} />

      <Route path="/career" element={<Career/>} />

      <Route path="/blog" element={<Blog/>} />

      <Route path="/foodindustry" element={<FoodIndustry/>} />



      </Routes>
      
      
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
