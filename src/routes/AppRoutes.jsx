
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { AllProducts } from '../components/AllProducts'
import { ProductDetails } from '../components/ProductDetails'
import { Cart } from '../components/Cart'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/products' element={<AllProducts/>}  />
      <Route path='/products/:id' element={<ProductDetails/>}  />
      <Route path='/cart' element={<Cart/>}  />
    </Routes>
  )
}
