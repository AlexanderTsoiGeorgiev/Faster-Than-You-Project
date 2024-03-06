import React from 'react' 
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Layout from './components/Layout/Layout.tsx';
import NotFound from './components/Error/NotFound.tsx';

//pages
import Index from "./pages/Index.tsx";
import Home from './pages/Home.tsx';
import Driver from './pages/Driver.tsx';
import Drivers from './pages/Drivers.tsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <h1>About </h1>
      },
      {
        path: "drivers",
        element: <Drivers />
      },
      {
        path: "driver/:driverId",
        element: <Driver />
      }
    ]
  },
  {
    
  }
]);

//Fugaz One -- nice font

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
