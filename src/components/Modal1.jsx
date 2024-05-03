import { useState } from 'react'
import { Modal, useDisclosure } from '@nextui-org/react'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import MusicPlayer from './MusicPlayer'

export default function Modal1() {
  const { isOpenPlayer, handelPlayMusic } = useOpenPlayer()

  const { onOpenChange } = useDisclosure()
 
  return (
    <div className=''>
      <Modal
        isOpen={isOpenPlayer}
        placement='bottom'
        backdrop='blur'
        onOpenChange={onOpenChange}
        onClose={handelPlayMusic}
        size='2xl'
      >
        <MusicPlayer />
      </Modal>
    </div>
  )
}
