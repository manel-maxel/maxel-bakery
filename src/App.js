import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Page/Shop';
import ShopCategory from './Page/ShopCategory';
import LoginSignup from './Page/LoginSignup';
import Product from './Page/Product';
import Cart from './Page/Cart';
import Footer from './Components/Footer/Footer';
import birthday_banner from './Components/Assets/birthday_banner.png'
import cake_banner from './Components/Assets/cake_banner.png'
import mariage_banner from './Components/Assets/mariage_banner.png'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
<Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/anniversaire' element={<ShopCategory banner={birthday_banner} category="anniversaire"/>}/>
<Route path='/mariage' element={<ShopCategory banner={mariage_banner} category="mariage"/>}/>
<Route path='/cake' element={<ShopCategory banner={cake_banner} category="cake"/>}/>
<Route path='/traditionnel' element={<ShopCategory banner={cake_banner} category="traditionnel"/>}/>
<Route path="/product" element={<Product/>}>
<Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
</Routes>
    <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
