
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { AllProducts } from '../components/AllProducts'
import { ProductDetails } from '../components/ProductDetails'
import { Cart } from '../components/Cart'
import { Categories } from '../components/Categories'
import Account from '../components/Account'
import { CreateAccount } from '../components/CreateAccount'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home/>}  />
      <Route path='/home' element={<Home/>}  />
      <Route path='/products' element={<AllProducts/>}  />
      <Route path='/account' element={<Account/>}  />
      <Route path='/create-account' element={<CreateAccount/>}  />
      <Route path='/categories' element={<Categories/>}  />
      <Route path='/products/:id' element={<ProductDetails/>}  />
      <Route path='/cart' element={<Cart/>}  />
    </Routes>
  )
}
