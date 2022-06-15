import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import 'normalize.css/normalize.css'
import { ThemeContextProvider } from './Context/ThemeContext';


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
  </React.StrictMode>
  );
