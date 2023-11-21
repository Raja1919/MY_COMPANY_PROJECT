import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
