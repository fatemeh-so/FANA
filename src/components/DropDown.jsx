/* eslint-disable react/prop-types */
import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'

function DropDown() {
  const [selectedColor] = React.useState('default')

  const variants = ['']

  const DropdownContent = ({ variant, color }) => (
    <Dropdown>
      <DropdownTrigger>
        <Button color={"success"} variant={variant} className='capitalize w-[x]' size='sm'>
          d
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Dropdown Variants'
        color={color}
        variant={variant}
      >
        <DropdownItem key='new'>New file</DropdownItem>
        <DropdownItem key='copy'>Copy link</DropdownItem>
        <DropdownItem key='edit'>Edit file</DropdownItem>
        <DropdownItem key='delete' className='text-danger' color='danger'>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

  return (
    <div className='flex flex-wrap gap-4 w-[2rem'>
      {variants.map((variant) => (
        <DropdownContent
          key={variant}
          color={selectedColor}
          
          variant={variant}
        />
      ))}
    
    </div>
  )
}

export default DropDown
