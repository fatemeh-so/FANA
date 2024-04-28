import { Button } from '@nextui-org/react'
import { List, X } from '@phosphor-icons/react'

function HeaderMenu({ handelMenu, isOpen }) {
  //   const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div className=' relative flex  '>
        <Button
          onClick={handelMenu}
          className=' rounded-[0.8rem] bg-gray-700/55  p-[2em]'
        >
          {isOpen ? (
            <X size={25} color='#f2f2f2' />
          ) : (
            <List size={25} color='#f2f2f2' />
          )}
        </Button>
      </div>
    </>
  )
}

export default HeaderMenu
