import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import { AllRoutes } from './Pages/AllRoutes';
// import Productspage from './Pages/Productspage';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Productspage/> */}
     <AllRoutes />
    </div>
  );
}

export default App;
