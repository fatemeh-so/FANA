import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { House, MagnifyingGlass, MusicNotesSimple, User } from '@phosphor-icons/react'

function BottomBar() {
  const [activeNavLink, setActiveNavLink] = useState(null);

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
  };

  return (
    <div className='relative'>
      <div className='fixed rounded-[2rem] flex justify-center items-center bg-gray-700 opacity-95 p-0 w-[90%] h-[10%]'>
        <ul className='flex gap-[4rem] text-white1'>
          <li onClick={() => handleNavLinkClick('/home')}>
            <NavLink
              to='/home'
              className='flex flex-col items-center justify-center'
            >
              <House
                size={25}
                color={activeNavLink === '/home' ? '#fcfcff' : '#dedede'}
                weight={activeNavLink === '/home' ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
          <li onClick={() => handleNavLinkClick('/albums')}>
            <NavLink
              to='/albums'
              className='flex flex-col items-center justify-center'
            >
              <MagnifyingGlass
                size={25}
                color={activeNavLink === '/albums' ? '#fcfcff' : '#dedede'}
                weight={activeNavLink === '/albums' ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
          <li onClick={() => handleNavLinkClick('/playlist')}>
            <NavLink
              to='/playlist'
              className='flex flex-col items-center justify-center'
            >
              <MusicNotesSimple
                size={25}
                color={activeNavLink === '/playlist' ? '#fcfcff' : '#dedede'}
                weight={activeNavLink === '/playlist' ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
          <li onClick={() => handleNavLinkClick('/user')}>
            <NavLink
              to='/user'
              className='flex flex-col items-center justify-center'
            >
              <User
                size={25}
                color={activeNavLink === '/user' ? '#fcfcff' : '#dedede'}
                weight={activeNavLink === '/user' ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BottomBar;
