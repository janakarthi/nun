import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter ,Routes, Route} from "react-router-dom";
import Contact from './Screens/Contact';
import Portfolio from './Screens/productList/Portfolio';
import NavBar from './Navigation/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <HashRouter>
        <NavBar/>
  <Routes>
    <Route path="/" element={ <App />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
