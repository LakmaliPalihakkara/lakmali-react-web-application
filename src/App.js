import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import Tools from './components/Tools';
import Contact from './components/Contact';
import logoimg from './images/logo.png'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> } */}

    
<Router>
  <ul class="nav">

  <img src={logoimg} class="rounded float-right" alt='logo'/>

  <li>
    <Link to="/home"><b>Home</b></Link>
    </li>
    <li>
    <Link to="/services"><b>Services</b></Link>
    </li>
    <li>
    <Link to="/tools"><b>Tools</b></Link>
    </li>
    <li>
    <Link to="/contact"><b>Contact</b></Link>
    </li>


  </ul>

  <Routes>
  <Route path="/home" element={<Home/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/tools" element={<Tools/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>

</Router>

<Footer></Footer>
    </div>

/* <Router>
<Navbar />


  <Route path='/Services' component={Services} />
  <Route path='/Tools' component={Tools} />
  <Route path='./components/Contact' component={Contact} />

</Router> */


  );
}

export default App;
