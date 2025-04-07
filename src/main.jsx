import React from 'react';
import { StrictMode } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './pages/App';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import ThankYou from './pages/Thankyou';
const router = createHashRouter([
{
path: '/',
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
]);
createRoot(document.getElementById('root')).render(
<StrictMode>
<RouterProvider router={router} />
</StrictMode>
);