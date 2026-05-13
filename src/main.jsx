import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Work from './components/Work.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import Certifications from './components/Certifications.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work",
    element: <Work/>,
  },
  {
    path: "/work/:slug",
    element: <ProjectDetail />,
  },
  {
    path: "/certifications",
    element: <Certifications />,
  },
  



])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);