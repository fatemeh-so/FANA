/* eslint-disable react/prop-types */
import { Modal, useDisclosure } from '@nextui-org/react';
import { useOpenPlayer } from '../contexts/openPlayerContext';
import MusicPlayerHome from '../features/home/MusicPlayerHome';


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
        <MusicPlayerHome songValue={songValue}/>
      </Modal>
    </div>
  );
}
