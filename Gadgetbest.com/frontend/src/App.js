import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.jsx"

import Productspage from './Pages/Productspage';
import SingleProduct from './Pages/SingleProduct';

import { AllRoutes } from './Pages/AllRoutes';
import { Cart } from './Pages/Cart';
import { CheckoutSteps } from './Pages/Checkout';
// import Productspage from './Pages/Productspage';


function App() {
  return (
    <div className="App">

      {/* <SingleProduct/>
     <AllRoutes /> */};

     <Cart />
     {/* <CheckoutSteps /> */}

    </div>
  );
}

export default App;
