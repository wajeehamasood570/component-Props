import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MediaCard from './components/MediaCard';
import logo from './logo.svg';
import pic from './Main_img.jpg';
import Gate from './components/Gate';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MediaCard title = "Task 1 and 2" body = {["Card ", <b>About Electronics</b>]} imgUrl= {pic}/>
    <Gate  title = "Task 3" isOpen = {true} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
