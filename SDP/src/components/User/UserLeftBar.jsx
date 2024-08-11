import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Cog, Mail, Users, Power, ShoppingCart, Package, BarChart, Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const UserLeftbar = () => {

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/user/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Your Orders',
            link: '/user/orders',
            icon: Package
        },
        {
            title: 'Cart',
            link: '/user/cart',
            icon: ShoppingCart
        },
        {
            title: 'Favourites',
            link: '/user/favourite',
            icon: Heart
        }
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-6 '>
            <div className='h-[5%]  font-bold text-2xl flex justify-center items-center'>
            <ShoppingCart
             size={46} strokeWidth={2} className="pr-2" /> <NavLink to="/"> ApExGrOcEr</NavLink>
            </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
            <Avatar className='h-24 w-24 mt-9'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <p className="text-lg">User</p>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link}  className='p-5 bg-primary/5 hover:bg-slate-400 font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
          

        </div>
    )
}

export default UserLeftbar