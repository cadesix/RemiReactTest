import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import RecipeComponent from './RecipeComponent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/recipe',
    element: <RecipeComponent />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
