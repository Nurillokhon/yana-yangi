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
import Login from './companent/sign in/Sign';
import Sign from './companent/log in/Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Header />} />
            <Route path="/more/:id/:Namebook" element={<Card2 />} />
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



