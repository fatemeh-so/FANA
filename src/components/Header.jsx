import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from '@nextui-org/react'
// import { Input } from "postcss";
import { MagnifyingGlass } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useDeleteHeader } from '../contexts/deleteHeaderContext'
import SearchInput from './SearchInput'
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
const{handelCloseHeader}=useDeleteHeader()
  // const menuItems = [
  //   // 'Profile',
  //   // 'Dashboard',
  //   // 'Activity',
  //   // 'Analytics',
  //   // 'System',
  //   // 'Deployments',
  //   // 'My Settings',
  //   // 'Team Settings',
  //   // 'Help & Feedback',
  //   'Home',
  //   'Albums',
  //   'Playlist',
  //   'Sign Up',
  // ]

  return (
    <div className='  h-[3vh] w-[100%]'>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
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
            <Link color='' href='#'>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page'>
              Customers
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>

        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Link href='#'>Login</Link>
          </NavbarItem>
          <NavbarItem>
            {/* <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button> */}
      <SearchInput/>
          </NavbarItem>
        </NavbarContent>
<div className='h-[10%]'>
        <NavbarMenu  >
          {/* {menuItems.map((item, index) => ( */}
          <NavbarMenuItem className='h-[50vh]'  >
            <Link    className='w-full' color={'foreground'} href='' size='lg'>
              <NavLink to='/home'>Home</NavLink>
            </Link>
            <Link onClick={()=>handelCloseHeader(false)} className='w-full' color={''} href='' size='lg'>
              <NavLink to='/albums'>Albums</NavLink>
            </Link>
            <Link onClick={()=>handelCloseHeader(false)} className='w-full' color={''} href='' size='lg'>
              <NavLink to='/playlist'>Playlist</NavLink>
            </Link>
            <Link onClick={()=>handelCloseHeader(false)} className='w-full' color={''} href='' size='lg'>
              <NavLink to='/signup'>Sign Up</NavLink>
            </Link>
          </NavbarMenuItem>
          {/* ))} */}
        </NavbarMenu></div>
      </Navbar>
    </div>
  )
}
