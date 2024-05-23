/* eslint-disable react/prop-types */
import { Modal, useDisclosure } from '@nextui-org/react';
import { useOpenPlayer } from '../contexts/openPlayerContext';
import MusicPlayer from './MusicPlayer';


export default function Modal1({ songValue, dur }) {
  const { isOpenPlayer, handelPlayMusic } = useOpenPlayer();

  const { onOpenChange } = useDisclosure();

  return (
    <div className=''>
      <Modal
        isOpen={isOpenPlayer}
        backdrop='blur'
        onOpenChange={onOpenChange}
        onClose={handelPlayMusic}
        size='2xl'
      >
        <MusicPlayer songValue={songValue}  />
      </Modal>
    </div>
  );
}
