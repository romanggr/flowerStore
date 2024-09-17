import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Locations from './pages/Locations'
import Orders from './pages/Orders'
import Blog from './pages/Blog'
import ErrorPage from './pages/ErrorPage'
import Registration from './pages/Registration'
import AppLayout from './ui/AppLayout'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import Basket from './pages/Basket'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='shop' />} />
          <Route index path='shop' element={<Shop />} />
          <Route index path='product/:id' element={<ProductPage />} />
          <Route path='locations' element={<Locations />} />
          <Route path='orders' element={<Orders />} />
          <Route path='blog' element={<Blog />} />
          <Route path="*" element={<ErrorPage content={"This web page doesn't exist"} />} />

          <Route path='basket' element={<Basket />} />

          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />

        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App