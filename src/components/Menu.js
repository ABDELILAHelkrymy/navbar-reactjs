import {useState} from 'react'
import { FaBars, FaHome} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import './Menu.css'


function Menu() {
    const data = [
        {
          title :'Home',
          path: '/',
          cName: 'home',
          icon: <FaHome/>
        },
        {
          title :'About',
          path: '/about',
          cName: 'about',
          icon: <FaHome/>
        },
        {
          title :'Contact',
          path: '/',
          cName: 'contact',
          icon: <FaHome/>
        },
        {
          title :'More',
          path: '/',
          cName: 'more',
          icon: <FaHome/>
        },
      ]
    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => {
        setSidebar(!sidebar)
    }
    

   
  return (
    <>
        <div className='menu'>
            <nav className='nav'>
                {
                    !sidebar ? <FaBars onClick={showSideBar}/> : <AiOutlineClose onClick={showSideBar}/>
                }
            </nav>
            
            <div className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {data.map((item, index) => {
                        return (
                            
                                <li key={index} className='nav-menu-item'>
                                    <span>{item.title}</span>
                                </li>
                            
                            
                        )
                        
                    })}
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default Menu