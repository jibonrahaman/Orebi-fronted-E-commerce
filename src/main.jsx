import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactLeyouts from './Outlet/ReactLeyouts'
import Homes from './Home/Home.jsx'
import AboutPage from './Components/AboutPart/AboutPage'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import SignUpPage from './Components/SignUpPart/SignUpPage'
import { Provider } from 'react-redux'
import { store } from './Components/Redux/Store'
import Contacts from './Components/ContactsPart/Contacts.jsx'
import ProductPage from './Components/ProductPage/ProductPage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<ReactLeyouts/>}>
        
      <Route path="/" 
      element={<Homes/>}>
      </Route>

       <Route path="/shop" 
      element={<ProductPage/>}>
      </Route>
      
       <Route path="/about" 
      element={<AboutPage/>}>
      </Route> 
      <Route path="/contacts" 
      element={<Contacts/>}>
      </Route> 

      <Route path="/sign-up" 
      element={<SignUpPage/>}>

      </Route>
     
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
