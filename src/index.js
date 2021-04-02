//imports from the react node_module
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
//import from the Kennel.js
import { Kennel } from "./components/Kennel";
import './index.css';

//this statement renders things to the DOM at the #root
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
