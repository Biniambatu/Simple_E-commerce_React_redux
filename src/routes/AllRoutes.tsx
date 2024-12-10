
import { Route, Routes } from "react-router-dom"
import { Cart, Home } from "../pages"
import ProductDetail from "../components/ProductDetail"
import Photo from "../pages/Photo"
import PhotoCart from "../components/PhotoCart"
import Search from "../pages/Search"

export const AllRoutes = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/photo" element={<Photo/>} ></Route>
        <Route path="/photoCart" element={<PhotoCart/>} ></Route>
        <Route path="/productDetail/:id" element={<ProductDetail/>}></Route>
        <Route path="/search" element={<Search  />} />
      </Routes>
    </>
  )
}

