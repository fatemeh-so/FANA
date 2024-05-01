import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDeleteHeader } from '../contexts/deleteHeaderContext'
import { House, MagnifyingGlass, MusicNotesSimple, User } from '@phosphor-icons/react'

function BottomBar() {
  const [active, setActive] = useState(null)
  const { handelCloseHeader, close } = useDeleteHeader()

  const position = "home";

  const handel = (buttonId) => {
    setActive(buttonId)
  }

  return (
    <div className='relative'>
      <div
        className={
          !close
            ? 'fixed rounded-[2rem] flex justify-center items-center bg-gray-700 opacity-95 my-[1.8rem] p-0 w-[90%] h-[10%]'
            : 'fixed rounded-[2rem] flex justify-center items-center bg-gray-700 opacity-95 p-0 w-[90%] h-[10%]'
        }
      >
        <ul className='flex gap-[4rem] text-white1'>
          <li
            onClick={() => {
              handel(1)
              handelCloseHeader(true, position)
            }}
          >
            <NavLink to='/home' className='flex flex-col items-center justify-center'>
              <House
                size={25}
                color='#fcfcff'
                weight={active === 1 ? 'fill' : 'bold'}
              />
              {/* <span className='text-[.7rem]'>Home</span> */}
            </NavLink>
          </li>
          <li
            onClick={() => {
              handel(2)
              handelCloseHeader(false)
            }}
          >
            <NavLink to='/albums' className='flex flex-col items-center justify-center'>
              <MagnifyingGlass
                size={25}
                color='#fcfcff'
                weight={active === 2 ? 'fill' : 'bold'}
              />
              {/* <span className='text-[.7rem]'>Search</span> */}
            </NavLink>
          </li>
          <li
            onClick={() => {
              handel(3)
              handelCloseHeader(false)
            }}
          >
            <NavLink to='/playlist' className='flex flex-col items-center justify-center'>
              <MusicNotesSimple
                size={25}
                color='#fcfcff'
                weight={active === 3 ? 'fill' : 'regular'}
              />
              {/* <span className='text-[.7rem]'>My Music</span> */}
            </NavLink>
          </li>
          <li onClick={() => handel(4)}>
            <NavLink to='/user' className='flex flex-col items-center justify-center'>
              <User
                size={25}
                color='#fcfcff'
                weight={active === 4 ? 'fill' : 'bold'}
              />
              {/* <span className='text-[.7rem]'>User</span> */}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomBar;
