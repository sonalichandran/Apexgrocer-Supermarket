import React from 'react'
import Button from './Button'
import { ModeToggle } from './components/mode-toggle'
import AnimatedCircularProgressBar from './components/magicui/animated-circular-progress-bar'
// import Login from './components/Login'
// import Register from './components/Register'
import Nav from './components/Nav'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "/src/components/ui/card.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Web/Home'
import Notfound from './pages/Web/Notfound'
import Register from './pages/Web/Register'
import Weblayout from './layout/Weblayout'
import Login from './pages/Web/Login'
import AdminLayout from './layout/Adminlayout'
import AdminDashboard from './pages/Web/User/Admin/AdminDashboard'
import AdminUsers from './pages/Web/User/Admin/AdminUser'
import AdminProduct from './pages/Web/User/Admin/AdminProduct'
import AdminOrders from './pages/Web/User/Admin/AdminOrder'
import AdminVendors from './pages/Web/User/Admin/AdminVendors'
import FruitList from './pages/Web/FruitList'
import Weblayout2 from './layout/Weblayout2'
import VegetableList from './pages/Web/Vegetables'
import UserLayout from './layout/Userlayout'
import UserDashboard from './pages/Web/User/UserDashboard'
import OrderList from './pages/Web/User/OrderList'
import Cart from './pages/Web/User/Cart'
import Favourite from './pages/Web/User/Favourite'
import MeatList from './pages/Web/MeatList'
import MilkList from './pages/Web/MilkList'
import GroceryList from './pages/Web/GroceryList'
import AdminLogin from './pages/Web/AdminLogin'




export default function App() {
    return (
        <>
     
       
        {/* <Nav/> */}
        {/* <ModeToggle/>
        <Login/>
        <Register/> */}
        <BrowserRouter>
        <Routes>
          <Route element={<Weblayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        
          <Route path='/register' element={<Register/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
         
        
          <Route path='*' element={<Notfound/>}/>
        </Route>
        <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/product' element={<AdminProduct />} />
                        <Route path='/admin/orders' element={<AdminOrders />} />
                        <Route path='/admin/vendors' element={<AdminVendors />} />
                    </Route>
        <Route element={<Weblayout2/>}>
                        <Route path='/fruits' element={<FruitList />} />
                        <Route path='/vegetables' element={<VegetableList />} />
                        <Route path='/meat' element={<MeatList/>} />
                        <Route path='milk'  element={<MilkList/>}/>
                        <Route path='grocery' element={<GroceryList/>} />
                        
                    </Route>
        <Route element={<UserLayout/>}>
                        <Route path='/user/dashboard' element={<UserDashboard/>}/>
                        <Route path='/user/orders' element={<OrderList/>}/>
                        <Route path='/user/cart' element={<Cart/>}/>
                        <Route path='/user/favourite' element={<Favourite/>}/>
                    
                        
                    </Route>

        </Routes>
        </BrowserRouter>
     
        
        </>
      
    )
  }