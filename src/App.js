import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./companent/Header";
import Navbar from "./companent/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
