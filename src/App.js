import { Outlet } from 'react-router-dom';
import './App.css';
import Card from './companent/Card';
import Header from './companent/Header';
import Navbar from './companent/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>   
     <Header/>
      <Card/>
    </div>
  );
}


export default App;
