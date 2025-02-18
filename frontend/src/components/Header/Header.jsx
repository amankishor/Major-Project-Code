import React from 'react';
import { useEffect,useRef ,useContext} from 'react';
import logo from "../../assets/images/logo.png";
import logou from "../../assets/images/logou1.png"

import { NavLink ,Link } from 'react-router-dom';
import {BiMenu}  from "react-icons/bi";
// import ur1 from "../../assets/images/ur1.png"
import oxyzen from "../../assets/images/oxyzen.png"
import {authContext} from "../../context/AuthContext.jsx"

const navLinks =[
  {
    path:"/home",
    display:'Home'
  },
  // {
  //   path:"/doctors",
  //   display:'Find a Doctor'
  // },
  {
    path:"/sele",
    display:'Service'
  },
  {
    path:"/services",
    display:'Researches'
  },
  {
    path:"/contact",
    display:'Contact'
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user , role , token } = useContext(authContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()

    return()=> window.removeEventListener('scroll',handleStickyHeader)
  });

  const toggleMenu =()=>menuRef.current.classList.toggle('show__menu')
  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          
          <div>
            <img src={logou} alt ="" style={{height:40, width:120}}/>
          </div>
                    {/* menu */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link,index) =>(
                <li key={index}>
                  <NavLink
                   to={link.path} 
                   className={navClass => navClass.isActive
                    ? "text-primaryColor text-[16px] leading-7 font-[600]"
                    :"text-textColor text-[16px] leading-7 font-[500]"
                   }>{link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* nav right */}
          <div className='flex items-center gap-4'>
            {
              token && user ? ( 
              <div>
                <Link to={`${role === 'doctor' ? '/doctors/profile/me':'users/profile/me' }`}>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={user?.photo} className='w-full rounded-full' alt =""/>
                </figure>
                {/* <h2>{user?.name}</h2> */}
                </Link>   
              </div> 
            ):( 
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
                justify-center rounded-[50px]'>Login</button>
              </Link>
          )}
            
           
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
            </span>
          </div>
        </div>
      </div> 
    </header>
  )
}

export default Header
