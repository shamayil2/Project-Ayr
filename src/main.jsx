import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {useState} from "react"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import App from './App.jsx'
import AllProducts from "./pages/AllProducts"
import CategoryProducts from "./pages/CategoryProducts"
import ProductDetails from "./pages/ProductDetails"
import Wishlist from "./pages/Wishlist"
import UserProfile from "./pages/UserProfile"
function Root(){
  const [idsInCartObj,setIdsInCartObj] = useState({})
  const [wishlist,setWishlist] = useState({})
  const [inWishlist,setInWishlist] = useState([])
  const [addressArr,setAddressArr] = useState(["121 Street 3,South Delhi, New Delhi 110025, India"])
  const [placedOrderArr,setPlacedOrderArr] = useState({})
  const [filteredProducts,setFilteredProducts] = useState([])
  const router = createBrowserRouter([{
    path:"/",
    element:<Home filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
  },
  {
    path:"/products/category/:categoryId",
    element:<CategoryProducts filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist} idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj} />
  },
  {path:"/products",
  element:<AllProducts searchedProducts={filteredProducts} setSearchedProducts={setFilteredProducts} setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist} idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj}/>},
  {
    path:"/products/productdetails/:productId",
    element:<ProductDetails filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setWishlist={setWishlist} wishlist={wishlist} inWishlist={inWishlist} setInWishlist={setInWishlist} idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj}/>
  },{
    path:"/products/wishlist",
    element:<Wishlist setWishlist={setWishlist} wishlist={wishlist} idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj}/>
  },{path:"/products/cart",
    element:<Cart idsInCartObj={idsInCartObj} setIdsInCartObj={setIdsInCartObj} setWishlist={setWishlist} wishlist={wishlist} placedOrderArr={placedOrderArr} setPlacedOrderArr={setPlacedOrderArr} addressArr={addressArr} setAddressArr={setAddressArr}/>
  },{
    path:"/userprofile",
    element:<UserProfile addressArr={addressArr} setAddressArr={setAddressArr} placedOrderArr={placedOrderArr} setPlacedOrderArr={setPlacedOrderArr}/>
  }

  ]
  
  )

  return <RouterProvider router={router} />

}





createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Root/>
  </StrictMode>,
)
