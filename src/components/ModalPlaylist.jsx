import { Modal, useDisclosure } from '@nextui-org/react'
import MyMusicPlayer from '../features/MyPlaylist/MyMusicPlayer'
import { useOpenPlayer } from '../contexts/openPlayerContext'

export default function ModalPlaylist({ songValue }) {
  const { handelMyPlay, isOpenPlayList, } = useOpenPlayer()

  const { onOpenChange } = useDisclosure()

  return (
    <div className=''>
      <Modal
        isOpen={isOpenPlayList}
        // placement='bottom'
        backdrop='blur'
        onOpenChange={onOpenChange}
        onClose={handelMyPlay}
        size='2xl'
      >
        <MyMusicPlayer songValue={songValue} />
      </Modal>
    </div>
  )
}
