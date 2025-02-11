import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from '../Logo/Logo'
import { GrAppsRounded } from "react-icons/gr";
import { LuApple } from "react-icons/lu";
import { useState } from 'react'
import { MdOutlineDirectionsRun } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
function Navbar({ children, name = "" }) {
    const [isLoggedIn, setIsloggedIn] = useState(true)
    return (
        <>
            <div className='relative pr-[60px]'>

                <div className='navbar xl:w-2/12 md:w-4/12 h-dvh z-50 bg-[#1C0333] fixed flex flex-col pr-3 right-0'>
                    <div className='flex justify-evenly align-middle'>
                        <p className='text-3xl my-auto mx-2 '><GrAppsRounded /></p>
                        <NavLink to={'/E-shop'}><Logo classname={"logo imageLogo"} /></NavLink>
                    </div>
                    <div className='flex justify-start my-6  align-middle'>
                        <p className='text-3xl my-auto '><IoPersonCircle />
                        </p>
                        <p className='mr-10 whitespace-nowrap '>{
                            isLoggedIn ?
                                <Link to={'/E-shop/user-panel'}>username</Link>
                                : <Link to={'/E-shop/login'}>login / signup</Link>
                        }</p>
                    </div>
                    <div className='flex justify-start my-6  align-middle'>
                        <p className='text-3xl my-auto '><LuApple />
                        </p>
                        <NavLink to={'/E-shop/diet-center'}>
                            <p className='mr-10 whitespace-nowrap '>diet center</p>
                        </NavLink>
                    </div>
                    <div className='flex justify-start my-6  align-middle'>
                        <p className='text-3xl my-auto '><MdOutlineDirectionsRun />
                        </p>
                        <NavLink to={'/E-shop/shop-center'}>
                            <p className='mr-10 whitespace-nowrap '>shop center</p>
                        </NavLink>
                    </div>
                    <div className='flex justify-start my-6  align-middle'>
                        <p className='text-3xl my-auto '><FaUsersGear /></p>
                        <NavLink to={'/E-shop/about-center'}>
                            <p className='mr-10 whitespace-nowrap '>about us</p>
                        </NavLink>
                    </div>
                    <div className='flex justify-start my-6  align-middle'>
                        <p className='text-3xl my-auto '><FaQuestion /></p>

                        <NavLink to={'/E-shop/faq'}>
                            <p className='mr-10'>FAQ</p>
                        </NavLink>
                    </div>


                </div>
                <div className='md:mr-20'>
                    <h1 className=' mr-4 py-14 text-3xl font-extrabold text-[#1C0333]'>{name}</h1>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Navbar
