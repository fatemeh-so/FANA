import { Button } from '@nextui-org/react'
import { List } from '@phosphor-icons/react'
import Input from './Input'
import HeaderMenu from './HeaderMenu'

function Header() {

  return (
    <div className=' flex gap-[0.5rem] mt-[3rem] relative '>
      <div className=' absolute w-[300px] h-[300px] bg-purple-950/40 blur-3xl rounded-full -top-36 -left-36'></div>
      <HeaderMenu/>
      <Input />
    </div>
  )
}

export default Header
