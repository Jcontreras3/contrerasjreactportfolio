import logo from "./logo.svg";
import "./App.css";
import PortfolioComponent from "./Components/Portfoilio/PortfolioComponent";
import MyParticles from "./Components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  return (
    <>
      <MyParticles />
      <PortfolioComponent />
    </>
  );
}

export default App;
