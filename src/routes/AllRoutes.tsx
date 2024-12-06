
import { Route, Routes } from "react-router-dom"
import { Cart, Home } from "../pages"
import ProductDetail from "../components/ProductDetail"
import Photo from "../pages/Photo"

export const AllRoutes = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/photo" element={<Photo/>} ></Route>
        <Route  path="/productDetail/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </>
  )
}

