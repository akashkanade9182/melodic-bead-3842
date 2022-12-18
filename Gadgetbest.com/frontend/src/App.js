import logo from './logo.svg';
import './App.css';
// import Navbar from "./Components/Navbar.jsx"
import AllRoutes  from './Pages/AllRoutes';
import Homepage from "./Pages/Homepage"
import Navbar from './Components/Navbar/Navbar';
// import Productspage from './Pages/Productspage';

function App() {
  return (
    <div className="App">
      <Navbar/>
   
     <AllRoutes />
    </div>
  );
}

export default App;
