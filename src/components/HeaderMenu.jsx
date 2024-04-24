import { Button } from '@nextui-org/react'
import { List } from '@phosphor-icons/react'

function HeaderMenu() {
  return (
    <div>
      <Button
        // color='primary'
        className=' rounded-[0.8rem] bg-gray-700/55  p-[2em]'
      >
        <List size={25} color='#f2f2f2' />
      </Button>
    </div>
  )
}

export default HeaderMenu
