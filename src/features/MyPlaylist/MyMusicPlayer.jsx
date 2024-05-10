import React, { useState, useEffect } from 'react'
import {
  ArrowsDownUp,
  PauseCircle,
  PlayCircle,
  Repeat,
  RepeatOnce,
  Shuffle,
  SkipBack,
  SkipForward,
} from '@phosphor-icons/react'
import { ModalContent, ModalHeader } from '@nextui-org/react'
import Slider1 from '../../components/Slider'
import PlayerButton from '../../components/PlayerButton'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import { useMyPlayer } from '../../contexts/MyMusicPLayerContext '
function MyMusicPlayer({ songValue }) {
  const { myMusic: music } = useOpenPlayer()
  const {
    isRepeat,
    isShuffle,
    isPlay,
    handleRepeat,
    handleShuffle,
    handlePlay,
    handelPlayNext,
    handelPlayPrev,
    playNext,
    playPrev,
    musicUi,
  } = useMyPlayer()

  const musicTrack = playNext || playPrev ? musicUi : music
  console.log(musicTrack)
  return (
    <ModalContent>
      <>
        <ModalHeader className='bg-gray-700 w-[100%] h-[95vh] sm:h-[90vh] flex justify-center items-center flex-col gap-1'>
          <div className='z-10 overflow-hidden absolute bottom-[0] w-[100%] h-[95%] rounded-t-[1.5rem] bg-gray-700/90'>
            <div className='w-[100%] h[100%] flex justify-center flex-col'>
              <div className='flex-col flex items-center justify-center'>
                <img
                  className='w-[90%] h-[25rem] sm:h-[33rem] rounded-[1rem]'
                  src={musicTrack?.coverArt}
                  alt=''
                />
                <div className='w-[85%] mt-[1rem] sm:mt-[.9rem]'>
                  <h1 className='text-[2rem] text-white1 mt-[1.5rem]'>
                    {musicTrack?.title}
                  </h1>
                  <h3 className='text-gray300 mt-[1rem] font-normal'>
                    {musicTrack?.artist}
                  </h3>
                  <div className='mt-[-3rem]'>
                    <PlayerButton music={music} />
                  </div>
                </div>
              </div>
              {/* icons */}
              <div className='mt-[3rem] flex items-center justify-evenly'>
                <div onClick={handleRepeat}>
                  {isRepeat ? (
                    <RepeatOnce size={28} color='#f8f7f8' />
                  ) : (
                    <Repeat size={28} color='#f8f7f8' />
                  )}
                </div>
                <div onClick={handelPlayPrev} className='ml-[3rem]'>
                  <SkipBack size={23} color='#f8f7f8' weight='fill' />
                </div>
                <div onClick={handlePlay}>
                  {!isPlay ? (
                    <PlayCircle size={78} color='#f8f7f8' weight='fill' />
                  ) : (
                    <PauseCircle size={78} color='#ede3ed' eight='fill' />
                  )}
                </div>
                <div onClick={handelPlayNext} className='mr-[3rem]'>
                  <SkipForward size={23} color='#f8f7f8' weight='fill' />
                </div>
                <div onClick={handleShuffle}>
                  {isShuffle ? (
                    <Shuffle size={28} color='#f8f7f8' />
                  ) : (
                    <ArrowsDownUp size={28} color='#f5eef5' />
                  )}
                </div>
              </div>
              <div className='flex flex-col mx-[1.5rem] mt-[4rem] h-[15vh] justify-between'>
                <Slider1 songValue={songValue} />
              </div>
            </div>
          </div>
        </ModalHeader>
      </>
    </ModalContent>
  )
}

export default MyMusicPlayer
