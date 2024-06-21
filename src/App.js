import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
