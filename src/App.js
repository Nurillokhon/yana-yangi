import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./companent/navbar/Navbar";
import Footer from './companent/footer/Footer'

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
