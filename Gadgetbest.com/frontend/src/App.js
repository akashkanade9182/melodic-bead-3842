import logo from './logo.svg';
import './App.css';
// import Navbar from "./Components/Navbar.jsx"
import AllRoutes  from './Pages/AllRoutes';
import Homepage from "./Pages/Homepage"
import Navbar from './Components/Navbar/Navbar';

import Productspage from './Pages/Productspage';
import SingleProduct from './Pages/SingleProduct';


import AllProductPage from './Pages/AllProductPage';
// import Productspage from './Pages/Productspage';


function App() {
  return (
    <div className="App">
      <Navbar/>
   
     <AllRoutes />
      {/* <Navbar/> */}
      {/* <Productspage/> */}
     {/* <AllRoutes /> */}
     {/* <AllProductPage/> */}

      {/* <SingleProduct/> */}
    


    </div>
  );
}

export default App;
