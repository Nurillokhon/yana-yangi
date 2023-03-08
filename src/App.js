import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./companent/footer/Footer";
import Navbar from "./companent/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
