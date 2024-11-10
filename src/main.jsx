import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import './index.css'
  
import App from './App.jsx'
import ErrorPage from "./pages/Error"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Connect from './pages/Connect';

const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "connect", element: <Connect /> },
          ],
    },
    { basename: import.meta.env.BASE_URL },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
