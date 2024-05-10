import { Modal, useDisclosure } from '@nextui-org/react'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import MusicPlayer from './MusicPlayer'
import MusicPlayerArtist from './MusicPlayerArtist'

export default function ModalArtist({songValue}) {
  const { isOpenArtistMusic, handelArtistMusic } = useOpenPlayer()

  const { onOpenChange } = useDisclosure()
//  console.log(nextMusic);
  return (
    <div className=''>
      <Modal
        isOpen={isOpenArtistMusic}
        // placement='bottom'
        backdrop='blur'
        onOpenChange={onOpenChange}
        onClose={handelArtistMusic}
        size='2xl'
      >
        <MusicPlayerArtist songValue={songValue}  />
      </Modal>
    </div>
  )
}
