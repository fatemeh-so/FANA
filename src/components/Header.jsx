import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link
} from '@nextui-org/react'
// import { Input } from "postcss";
import { NavLink } from 'react-router-dom'
// import { useDeleteHeader } from '../contexts/deleteHeaderContext'
import SearchInput from './SearchInput'
// import {AcmeLogo} from "./AcmeLogo.jsx";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className='h-[3vh] w-[100%]'>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='w-full'
        maxWidth='2xl'
      >
        <NavbarContent className='sm:hidden' justify='start'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className='font-bold text-inherit'>FANA</p>
          </NavbarBrand>
          <NavbarItem>
            <NavLink color='' to='/albums'>
              Albums
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/playlist'>Playlist</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/artist'>Artist</NavLink>
          </NavbarItem>
          {/* <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>

        <NavbarContent justify='end'>
     
          <NavbarItem>
            {/* <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button> */}
            <SearchInput />
          </NavbarItem>
        </NavbarContent>
        <div className='h-[10%]'>
          <NavbarMenu>
            {/* {menuItems.map((item, index) => ( */}
            <NavbarMenuItem className='h-[50vh]'>
              <Link className='w-full' color={'foreground'} href='' size='lg'>
                <NavLink to='/home'>Home</NavLink>
              </Link>
              <Link className='w-full' color={''} href='' size='lg'>
                <NavLink to='/albums'>Albums</NavLink>
              </Link>
              <Link className='w-full' color={''} href='' size='lg'>
                <NavLink to='/playlist'>Playlist</NavLink>
              </Link>
              <Link className='w-full' color={''} href='' size='lg'>
                <NavLink to='/artist'>Artist</NavLink>
              </Link>
            </NavbarMenuItem>
            {/* ))} */}
          </NavbarMenu>
        </div>
      </Navbar>
    </div>
  )
}
