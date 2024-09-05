
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/portfolio-react" element={<Home/>} />
          <Route path = "/about" element={<About/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path = "/portfolio" element={<Portfolio/>}/>
          <Route path = "/contact" element={<Contact />}/>


        </Routes>

      
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
