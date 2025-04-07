import React from 'react';
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";

import App from './pages/App';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import ThankYou from './pages/Thankyou';

const router = createBrowserRouter([
  {
    path: '/',  // Change to root path
    element: <App />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
  {
    path: '/AboutUs',
    element: <AboutUs />,
  },
  {
    path: '/Thankyou',
    element: <ThankYou />,
  },
], {
  basename: process.env.NODE_ENV === 'production' ? '/fake-store' : '/'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);