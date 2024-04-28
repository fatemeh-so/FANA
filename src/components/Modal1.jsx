import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from '@nextui-org/react'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import {
  PlayCircle,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from '@phosphor-icons/react'
import Slider1 from './Slider'

export default function Modal1() {
  const{isOpenPlayer, handelPlayMusic }=useOpenPlayer()

  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [modalPlacement, setModalPlacement] = React.useState('auto')
  const { music } = useOpenPlayer()

  return (
    <div className=''>
      {/* <Button onPress={onOpen} className='max-w-fit'>
        Open Modal
      </Button>
      <RadioGroup
        label='Select modal placement'
        orientation='horizontal'
        value={modalPlacement}
        onValueChange={setModalPlacement}
      >
        <Radio value='bottom'>bottom</Radio>
      </RadioGroup> */}
      <Modal
        isOpen={isOpenPlayer}
        placement="bottom"
        backdrop="blur"
        onOpenChange={onOpenChange}
        onClose	={handelPlayMusic}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader  className='  bg-gray-700 w-[100%] h-[95vh] flex justify-center items-center flex-col gap-1'>
              
              <div className='z-10 overflow-hidden absolute bottom-[0] w-full h-[95%] rounded-t-[1.5rem]  bg-gray-700/90'>
                <div className=' w-[100%] h[100%] flex justify- flex-col  '>
                  <div className='flex-col flex items-center  '>
                    <img
                      className='w-[25rem] mt-[1.3rem] rounded-[1.5rem] '
                      src="/public/coverArt/Digital-World-album-cover-design.jpg"
                      alt=''
                    />
                    <h1 className='text-[2rem]  text-white1 mt-[1.5rem] '>
                      {music.title}
                    </h1>
                    <h3 className='text-gray300 mt-[1rem] '>
                      {music.artist}
                      </h3>
                  </div>
                  {/* icons */}
                  <div className=' mt-[2rem] flex items-center justify-evenly  '>
                    <span className='flex '>
                      <Repeat size={23} color='#f8f7f8' />
                    </span>
                    {/* <span>
            <RepeatOnce size={28} color='#f8f7f8' />
          </span> */}
                    <span className='ml-[3rem] '>
                      <SkipBack size={23} color='#f8f7f8' weight='fill' />
                    </span>
                    <span>
                      <PlayCircle size={78} color='#f8f7f8' weight='fill' />
                    </span>
                    <span className='mr-[3rem]'>
                      <SkipForward size={23} color='#f8f7f8' weight='fill' />
                    </span>
                    <span>
                      <Shuffle size={23} color='#f8f7f8' />
                    </span>
                  </div>
                  <div className='flex mx-[1.5rem]'><Slider1 music={music}/></div>
                  
                </div>
              </div>
              </ModalHeader>

            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
