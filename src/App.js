import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/HeroSection.jsx";
import Logos from "./components/Logos.jsx";
import Navbar from "./components/Navbar.jsx";
import './styles/global.scss'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Logos/>
    </>
  );
}

export default App;
