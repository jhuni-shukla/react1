import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Page from './About2';
import Abc,{Abc2} from './About';
import './global.css'
import Page2 from './About3';
import BasicExample from './About4';
import Mycharts from './About5_recharts'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Abc></Abc>
      <Abc2></Abc2>
      <Page></Page> 
      <Page2></Page2>
      <BasicExample></BasicExample>
      <Mycharts />
 </React.StrictMode>
);


