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
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

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
          <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Link href='#'>Login</Link>
          </NavbarItem>
          <NavbarItem>
            {/* <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button> */}
            <Input
              // label='Search'
              isClearable
              radius='sm'
              classNames={{
                label: 'text-black/50 dark:text-white/90',
                input: [
                  'w-[20rem] sm:w-[10rem]',
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ],
                innerWrapper: 'bg-transparent',
                inputWrapper: [
                  'shadow-xl',
                  'bg-default-200/50',
                  'dark:bg-default/60',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focused=true]:bg-default-200/50',
                  'dark:group-data-[focused=true]:bg-default/60',
                  '!cursor-text',
                ],
              }}
              placeholder='search...'
              startContent={
                <MagnifyingGlass />
                // <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className='w-full'
                color={
                  index === 2
                    ? 'warning'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                href='#'
                size='lg'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  )
}
