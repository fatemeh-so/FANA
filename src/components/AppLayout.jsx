import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import Modal1 from './Modal1'
import { useSearchFocus } from '../contexts/FocusSearchContext'
import SearchResult from './SearchResult'
import { useEffect, useRef, useState } from 'react'
import { usePlayer } from '../contexts/musicPLayerContext'
import ModalPlaylist from './ModalPlaylist'
import { useMyPlayer } from '../contexts/MyMusicPLayerContext '
function AppLayout() {
  const { isOpenPlayer, music, isOpenPlayList } = useOpenPlayer()
  const { searchFocus } = useSearchFocus()
  const { pathname } = useLocation()
  const { audioRef, audioSrc, valueTime, setValueTime } = usePlayer()
  const {
    audioRef: audioRef1,
    audioSrc: audioSrc1,
    valueTime: valueTime1,
    setValueTime:setValueTime1,
  } = useMyPlayer()

  const [songValue, setSongValue] = useState()
  const [songValue1, setSongValue1] = useState()

  // const {  } = useOpenPlayer()
  function handel() {
    const currentTime = audioRef.current.currentTime
    setSongValue(currentTime)
  }
  function handel1() {
    const currentTime = audioRef1.current.currentTime
    setSongValue1(currentTime)
  }

  console.log()

  return (
    <div className='text-white1    overflow-y-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-gray900 opacity-[94%] w-[100%] h-[100vh]'>
      <div className=' absolute w-[300px] h-[300px] bg-purple-950/40 blur-3xl rounded-full -top-36 -left-36'></div>
      {isOpenPlayList ? <ModalPlaylist songValue={songValue1} /> : ''}
      {isOpenPlayer ? <Modal1 songValue={songValue} /> : ''}
      <audio ref={audioRef} src={audioSrc} onTimeUpdate={handel}>
        {/* <source src={audioSrc} /> */}
      </audio>
      <audio ref={audioRef1} src={audioSrc1} onTimeUpdate={handel1}/>

      <main className='h-[100vh] w-[100%] '>
        <div className='flex flex-col items-center'>
          {pathname === '/home' && <Header />}
          {searchFocus && <SearchResult />}
          <div className='h-[100%] flex flex-col   justify-between w-[90%]  '>
            <Outlet />
            {/* <BottomBar /> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout
