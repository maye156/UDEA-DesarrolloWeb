import React from 'react';
//import ReactDOM from 'react-dom/client';
import App from './components/App/App';

//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Marvel} from './components/App/Marvel'


//Renderización
/*ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <App/>
 </React.StrictMode>
);*/

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="marvel" element={<Marvel />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
