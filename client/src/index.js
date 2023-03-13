import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import stockData from '../data.json';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const menu = document.querySelector(".nav");

const header = document.createElement("header");
header.innerHTML = `Trading Aid`;
document.body.appendChild(header);

const nav = document.createElement("nav");

//return html in the javasccript file to render nav bar

/*stockData.map(({ symbol, company }) => {
    const nav = document.createElement("nav");
    nav.setAttribute("class", "nav");

});*/
root.render(<App />);
