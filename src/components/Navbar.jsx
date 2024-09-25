import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <p className='blue-gradient_text'>ML</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ?
                    'text-blue-500' : 'text-black nav-text-shadow'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ?
                    'text-blue-500' : 'text-black nav-text-shadow'}>
                    Projects
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ?
                    'text-blue-500' : 'text-black nav-text-shadow'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}
export default Navbar