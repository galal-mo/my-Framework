import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './Latout/Layout';

import About from './components/About/About';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Port from './components/Port/Port';
import Contact from './components/Contact/Contact';

export default function App() {
  const routers = createHashRouter([
    {
      path:'/', element: <Layout />, children: [
        { path:'', element: <Home /> },
        { path:'About', element: <About /> },
        { path:'Portofolio', element: <Port /> },
        { path:'Contact', element: <Contact /> },
      ]
    }
  ])
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
