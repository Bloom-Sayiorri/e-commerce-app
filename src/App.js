import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Profile from './pages/Profile';
import Menu from './pages/Menu';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products />}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
