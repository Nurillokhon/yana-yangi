import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card2 from './companent/card2/Card2';
import Korzinka from './companent/korzinka/Korzinka';
import Like from './companent/like/Like';
import { store } from './companent/store/store'
import Header from './companent/header/Header';
import Login from './companent/log in/Login';
import Sign from './companent/sign in/Sign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Header />} />
            <Route path="/card2/:id" element={<Card2 />} />
            <Route path="/korzinka" element={<Korzinka />} />
            <Route path="/like" element={<Like />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



