import { NavLink } from 'react-router-dom'

function MenuOpen() {
  return (
    <div className='text-center leading-[3rem]'>
      <ul className=''>
        {/* <li><NavLink to="/home">Home</NavLink></li> */}
        <li>
          <NavLink to='/albums'>Album</NavLink>
        </li>
        <li>
          <NavLink to='/playlist'>my Playlist</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuOpen
