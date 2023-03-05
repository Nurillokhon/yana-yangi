import { Outlet } from 'react-router-dom';
import './App.css';
import Card from './companent/Card';
import Header from './companent/Header';
import Katalog from './companent/Katalog';
import Navbar from './companent/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>   
     <Header/>
      <Card/>
      <Katalog/>
    </div>
  );
}


export default App;
