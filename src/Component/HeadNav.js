import React, {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'

import { Link } from 'react-router-dom'
import './main_scss/headnav.scss'
import {IoIosEye} from "react-icons/io"

const NavItem = [
    {
        id: 1,
        name:'about',
        link: '/about'
    },
    {

        id: 2,
        name:'pricing',
        link: '/princing'
    },
    {

        id: 3,
        name:'patner',
        link: '/patner'
    },
    {

        id: 4,
        name:'contact',
        link: '/contact'
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
//   const closeMenuBar = () => setOpen(false)

  return (
   <header>
       <div className="my_nav">
           <div className="logo">
            <h2><IoIosEye color='#02ffe2' size={40}/> MYRAGE</h2>

             
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