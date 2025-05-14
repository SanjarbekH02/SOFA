import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import HeroSection from './Components/Hero/Hero';
import 'remixicon/fonts/remixicon.css';
import ServicesSection from './Components/Services/Services';
import Reviews from './Components/Review/Review';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
