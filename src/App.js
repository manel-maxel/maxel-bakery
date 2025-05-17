
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Page/Shop';
import ShopCategory from './Page/ShopCategory';
import LoginSignup from './Page/LoginSignup';
import Product from './Page/Product';
import Cart from './Page/Cart';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
<Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/anniversaire' element={<ShopCategory category="anniversaire"/>}/>
<Route path='/mariage' element={<ShopCategory category="mariage"/>}/>
<Route path='/cacke' element={<ShopCategory category="cacke"/>}/>
<Route path='/traditionnel' element={<ShopCategory category="traditionnel"/>}/>
<Route path="/producrt" element={<Product/>}>
<Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>


</Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
