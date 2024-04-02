import React from 'react' 
import { NavLink } from 'react-router-dom'
import { logo } from "../assets/images"

const Navbar = () => {
 
    return (
        <header className='header'>
          <NavLink to='/'>
            {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
            <div className='w-18 h-18 bg-white p-3 rounded-lg text-blue-500 text-xl font-bold'>Simón</div>
          </NavLink>
          <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
              About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
              Projects
            </NavLink>
          </nav>
        </header>
      );
    };
    
    export default Navbar;