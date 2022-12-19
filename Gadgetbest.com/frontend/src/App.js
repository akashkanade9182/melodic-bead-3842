import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.jsx"

// import Productspage from './Pages/Productspage';
import SingleProduct from './Pages/SingleProduct';

import { AllRoutes } from './Pages/AllRoutes';
import CheckoutPage from './Pages/CheckoutPage';
import PaymentPage from './Pages/PaymentPage';


// import Productspage from './Pages/Productspage';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Productspage/> */}
     <AllRoutes />
      {/* <SingleProduct/>
     <AllRoutes /> */}

     {/* <Cart /> */}
     <CheckoutPage />
     <PaymentPage />

    </div>
  );
}

export default App;
