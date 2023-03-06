import Hero from './components/Hero.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx';
import Plans from './components/Plans.jsx';
import Rooms from './components/Rooms.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plans/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>


    </div>
  );
}

export default App;
