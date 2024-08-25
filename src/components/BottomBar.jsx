import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  House,
  MagnifyingGlass,
  MusicNotesSimple,
  User,
} from '@phosphor-icons/react';
import { useOpenAlbum } from '../contexts/openAlbumContext';

function BottomBar() {
  const { activeNavLink, handleNavLinkClick } = useOpenAlbum();
  const { pathname } = useLocation();
  
  useEffect(() => {
    handleNavLinkClick(pathname);
  }, [pathname, handleNavLinkClick]);

  return (
    <div className='relative flex justify-center '>
      <div className='fixed w-[90%] md:w-full md:max-w-[42rem] bottom-4 md:bottom-4 xl:bottom-[.8rem] rounded-[2rem] flex  items-center bg-gray-700 opacity-90 xl:px-[4rem] md:px-[4rem] md:py-8 xl:py-[2rem] px-12 py-8'>
        <ul className='flex gap-[3.5rem] md:gap-[4rem] justify-between text-white w-full'>
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
          <li onClick={() => handleNavLinkClick('/artist')}>
            <NavLink
              to='/artist'
              className='flex flex-col items-center justify-center'
            >
              <User
                size={25}
                color={activeNavLink === '/artist' ? '#fcfcff' : '#dedede'}
                weight={activeNavLink === '/artist' ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomBar;
