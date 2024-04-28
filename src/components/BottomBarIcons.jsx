import { MagnifyingGlass, MusicNotesSimple, User } from '@phosphor-icons/react'
import { House } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function BottomBarIcons() {
  const [active, setActive] = useState(true)
  // const active=true
  const activeStyle = active ? 'fill' : ''
  return (
    <>
      <li>
        <button className=''>
          <NavLink to='/home'>
            <House size={25} color='#fcfcff' weight={activeStyle} />
          </NavLink>
        </button>
      </li>
      <li>
        <NavLink to='/albums'>
          <MagnifyingGlass size={25} color='#fcfcff' />
        </NavLink>
      </li>
      <li>
        <NavLink to='/playlist'>
          <MusicNotesSimple size={25} color='#fcfcff' />
        </NavLink>
      </li>
      <li>
        <NavLink to='/user'>
          <User size={25} color='#fcfcff' />
        </NavLink>
      </li>
    </>
  )
}

export default BottomBarIcons
