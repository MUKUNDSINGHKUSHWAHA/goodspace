import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/HeroSection.jsx";
import Logos from "./components/Logos.jsx";
import Navbar from "./components/Navbar.jsx";
import './styles/global.scss'
import Needs from "./components/Needs.jsx";
import Integrations from "./components/Integrations.jsx";
import Customers from "./components/Customers.jsx";
import Expenses from "./components/Expenses.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Logos/>
      <Needs/>
      <Integrations/>
      <Customers/>
      <Expenses/>
    </>
  );
}

export default App;
