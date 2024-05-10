import { Modal, useDisclosure } from '@nextui-org/react'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import MusicPlayerAlbum from './MusicPlayerAlbum'

export default function ModalAlbum({songValue}) {
  const { isOpenAlbumMusic, handelAlbumMusic } = useOpenPlayer()

  const { onOpenChange } = useDisclosure()
  return (
    <div className=''>
      <Modal
        isOpen={isOpenAlbumMusic}
        // placement='bottom'
        backdrop='blur'
        onOpenChange={onOpenChange}
        onClose={handelAlbumMusic}
        size='2xl'
      >
        <MusicPlayerAlbum songValue={songValue} />
      </Modal>
    </div>
  )
}
