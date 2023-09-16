import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Classroom from './page/Classroom';
import Purchase from './page/Purchase';
import About from './page/About';
import Contact from './page/Contact'
import LoginS from './page/loginS';
import LoginT from './page/loginT';
import Signup from './page/Signup';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='classroom' element={<Classroom/>}/>
      <Route path='purchase' element={<Purchase/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='loginS' element={<LoginS/>}/>
      <Route path='loginT' element={<LoginT/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
