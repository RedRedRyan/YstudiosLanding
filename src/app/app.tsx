import { JSX } from 'react';
import Header from '../components/Header/Header';
import Home from '../Pages/Home';
import Footer from '../components/Footer/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; // Correct import
import About from '../Pages/About';
import OurWork from '../Pages/OurWork';

const App = (): JSX.Element => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="bg-[url('https://i.imgur.com/iHdHgmG.png')] bg-cover bg-center p-4 shadow-lg h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='our-work' element={<OurWork/>}/>
       </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;