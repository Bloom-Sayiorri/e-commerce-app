import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import Form from './pages/Form';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
