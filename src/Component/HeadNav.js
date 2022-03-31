import React, {useState,useEffect} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import  Logo from '../../src/svg/Logo.svg'

import { Link } from 'react-router-dom'
import './main_scss/headnav.scss'



const NavItem = [
    {
        id: 1,
        name:'about',
        link: '/'
    },
    {

        id: 2,
        name:'pricing',
        link: '/coins'
    },
    {

        id: 3,
        name:'News',
        link: '/cryptos-new'
    },
    {

        id: 4,
        name:'contact',
        link: '/'
    },
    {

        id: 5,
        name:'book a demo',
        link: '/'
    },
]

function HeadNav() {


    const [open, setOpen] = useState(false)


  
  const handleClick = () => setOpen(!open)
  const closeMenuBar = () => setOpen(false)



  return (
   <header>
       <div className="my_nav">
           <div className="logo">
            <img src={Logo} alt="" className='logo_eye' />

             
           </div>

     


              <div className="menu_icon" onClick= {handleClick}>
           <Hamburger  color='#02ffe2' size={22}
      toggled={open} toggle={setOpen}
           />
           </div>
           <div className={open ? 'my_navbar active' : 'my_navbar'}>
               <ul>
                  {NavItem.map((nav, id) => (
                      <li key={id}>
                          <Link to={nav.link}>
                          {nav.name}
                          </Link>
                      </li>
                  ))}
               </ul>
           </div>
       </div>

       {/* header */}

     
   </header>
  )
}

export default HeadNav