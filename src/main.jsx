import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead/PagesToRead.jsx';
import Services from './pages/Services/Services.jsx';
import About from './pages/About/About.jsx';
import CardDetails from './components/CardDetails/CardDetails.jsx';
import WishListBooks from './pages/ListedBooks/WishListBooks.jsx';
import ReadBooks from './pages/ListedBooks/ReadBooks.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
        loader:()=>fetch("/data.json")

      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>
          },
          {
            path: "wishListBooks",
            element:<WishListBooks></WishListBooks>,
          }
        ]
      },
     

      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },


    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
