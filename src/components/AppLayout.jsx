import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import Modal1 from './Modal1'
import { useSearchFocus } from '../contexts/FocusSearchContext'
import SearchResult from './SearchResult'
import { useEffect, useState } from 'react'
import { usePlayer } from '../contexts/musicPLayerContext'
import ModalPlaylist from './ModalPlaylist'
import { useMyPlayer } from '../contexts/MyMusicPLayerContext '
import ModalAlbum from './ModalAlbum'
import { useAlbumPlayer } from '../contexts/AlbumMusicPlayerContext'
import ModalArtist from './ModalArtist'
import { useArtistPlayer } from '../contexts/ArtistMusicPLayerContext '
function AppLayout() {
  const { isOpenPlayer, isOpenPlayList, isOpenAlbumMusic, isOpenArtistMusic } =
    useOpenPlayer()
  const { searchFocus } = useSearchFocus()  
  const { pathname } = useLocation()
  const { audioRef, audioSrc, handelPlayNext } = usePlayer()
  const {
    audioRef: audioRef1,
    audioSrc: audioSrc1,
  } = useMyPlayer()
  const {
    audioRef: audioRefAlbum,
    audioSrc: audioSrcAlbum,
  } = useAlbumPlayer()
  const {
    audioRef: audioRefArtist,
    audioSrc: audioSrcArtist,
  } = useArtistPlayer()

  const [songValue, setSongValue] = useState()

  const [songValue1, setSongValue1] = useState()
  const [songValueAlbum, setSongValueAlbum] = useState()
  const [songValueArtist, setSongValueArtist] = useState()
  const [dur, setDur] = useState()
  function handel() {
    const currentTime = audioRef.current.currentTime
    const dur = audioRef.current.duration
    setSongValue(currentTime)
    setDur(dur)
  }
  function handel1() {
    const currentTime = audioRef1.current.currentTime
    setSongValue1(currentTime)
  }
  function handelAlbum() {
    const currentTime = audioRefAlbum.current.currentTime
    setSongValueAlbum(currentTime)
  }
  function handelArtist() {
    const currentTime = audioRefArtist.current.currentTime
    setSongValueArtist(currentTime)
  }
 
  useEffect(() => {}, [])
  return (
    <div className='text-white1 overflow-y-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-gray900 opacity-[94%]'>
      <div className='absolute w-[300px] h-[300px] bg-purple-950/40 blur-3xl rounded-full -top-36 -left-36'></div>
      {isOpenPlayList ? <ModalPlaylist songValue={songValue1} /> : ''}
      {isOpenPlayer ? <Modal1 songValue={songValue} dur={dur} /> : ''}
      {isOpenAlbumMusic ? <ModalAlbum songValue={songValueAlbum} /> : ''}
      {isOpenArtistMusic ? <ModalArtist songValue={songValueArtist} /> : ''}

      {/* audio for home */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handel}
        onEnded={()=>handelPlayNext()}
      />
      {/* audio for playlist */}
      <audio
        ref={audioRef1}
        src={audioSrc1}
        onTimeUpdate={handel1}
        // onEnded={handelEndPlaylist}
      />
      {/* audio for album */}
      <audio
        ref={audioRefAlbum}
        src={audioSrcAlbum}
        onTimeUpdate={handelAlbum}
        // onEnded={handelEndAlbum}
      />
      <audio
        ref={audioRefArtist}
        src={audioSrcArtist}
        onTimeUpdate={handelArtist}
        // onEnded={handelEndArtist}
      />

      <main className='h-[100vh] w-[100%]'>
        <div className='flex w-full flex-col items-center'>
          {pathname === '/home' && <Header />}
          {searchFocus && <SearchResult />}
          <div className='h-[100%] flex flex-col justify-between w-[90%]'>
            <Outlet />
            {/* <BottomBar /> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout
