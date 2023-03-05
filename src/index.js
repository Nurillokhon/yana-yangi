import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card2 from './companent/card2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/card2/:id' element={<Card2/>}/>
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);


