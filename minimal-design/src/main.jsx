import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import BlogMain from './components/Blog/BlogMain'
const router = createBrowserRouter ([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'blog',
        element:<BlogMain/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
