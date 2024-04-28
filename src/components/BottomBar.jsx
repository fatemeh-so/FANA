import { MagnifyingGlass, MusicNotesSimple, User } from '@phosphor-icons/react'
import { House } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDeleteHeader } from '../contexts/deleteHeaderContext'

function BottomBar() {
  const [active, setActive] = useState(null)
  const { handelCloseHeader, close } = useDeleteHeader()

  // const activeStyle = active===1 ? 'fill' : 'bold'
const position="home"
  const handel = (buttonId) => {
    setActive(buttonId)
    // setActive('')
  }
  return (
    <div className='relative'>
      <div
        className={
          !close
            ? ' fixed rounded-[2rem] flex justify-center  items-center bg-gray-700 opacity-95 my-[1.8rem]  p-0  w-[90%] h-[10%]  '
            : 'fixed rounded-[2rem] flex justify-center items-center bg-gray-700 opacity-95   p-0  w-[90%] h-[10%]'
        }
      >
        <ul className='flex gap-[4rem]  text-white1'>
          <li
            onClick={() => {
              handel(1)
              handelCloseHeader(true,position)
            }}
          >
            <button className=''>
              <NavLink to='/home'>
                <House
                  size={25}
                  color='#fcfcff'
                  weight={active === 1 ? 'fill' : 'bold'}
                />
              </NavLink>
            </button>
          </li>
          <li
            onClick={() => {
              handel(2)
              handelCloseHeader(false)
            }}
          >
            <NavLink to='/albums'>
              <MagnifyingGlass
                size={25}
                color='#fcfcff'
                weight={active === 2 ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
          <li
            onClick={() => {
              handel(3)
              handelCloseHeader(false)
            }}
          >
            <NavLink to='/playlist'>
              <MusicNotesSimple
                size={25}
                color='#fcfcff'
                weight={active === 3 ? 'bold' : 'fill'}
              />
            </NavLink>
          </li>
          <li onClick={() => handel(4)}>
            <NavLink to='/user'>
              <User
                size={25}
                color='#fcfcff'
                weight={active === 4 ? 'fill' : 'bold'}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BottomBar
