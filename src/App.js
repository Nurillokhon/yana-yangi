import { Outlet } from 'react-router-dom';
import './App.css';
import Card from './companent/Card';
import Header from './companent/Header';
import Katalog from './companent/Katalog';
import Navbar from './companent/navbar/Navbar';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      {/* <Header /> */}
      {/* <Card /> */}
      {/* <Katalog /> */}
      <Outlet/>
    </div>
  );
}

export default App;
