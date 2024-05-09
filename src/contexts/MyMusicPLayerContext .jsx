/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useOpenPlayer } from './openPlayerContext'

const MyMusicPlayerContext = createContext()
function MyMusicPLayerProvider({ children }) {
  const { myMusic:music, isOpenPlayer ,musicOfPlaylist:filterMusic} = useOpenPlayer()
  // const { data: allMusic, isLoading } = useMusic()
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isPlay, setIsPlay] = useState(false)
  const [audioSrc, setAudioSrc] = useState()
  const [valueTime, setValueTime] = useState(0)
  const [playNext, setPlayNext] = useState(false)
  const allMusiclength = filterMusic?.length - 2
  const [musicUi,setMusicUi]=useState()
  const currentMusic =
  filterMusic?.findIndex((item) => item?.id === music?.id) || 0
  const audioRef = useRef(null)
  const [skip, setSkip] = useState(currentMusic)


  useEffect(
    function play() {
      if (music && audioRef) {
        if (isPlay) {
          audioRef.current.loop = isRepeat
          // if (playNext) {
          // audioRef.current.src = allMusic[nextMusicIndex].url
          // }
          // else {
          audioRef.current.src = music.url
          // }
          audioRef.current.currentTime = valueTime
          audioRef.current.play()
        } else {
          audioRef.current.pause()
        }
      }
    },

    [music, isPlay, audioRef, audioSrc, isRepeat, valueTime]
  )
  useEffect(() => {
    setPlayNext(false)
    console.log('change')
  }, [isOpenPlayer])
  

  useEffect(() => {
    if (playNext) {
      audioRef.current.src = filterMusic[skip].url
      setMusicUi(filterMusic[skip])
      audioRef.current.currentTime = valueTime
      audioRef.current.play()
    }
  }, [filterMusic, playNext, valueTime, skip])

  function handleRepeat() {
    setIsRepeat((isRepeat) => !isRepeat)
  }

  function handleShuffle() {
    setIsShuffle((isShuffle) => !isShuffle)
  }

  function handlePlay() {
    setIsPlay((play) => !play)
    console.log(playNext)
  }
  function handelPlayNext() {
    setPlayNext(true)
    setSkip((s) => s + 1)
    if (skip > allMusiclength) {
      setSkip(0)
    }
  }
  return (
    <MyMusicPlayerContext.Provider
      value={{
        isRepeat,
        isShuffle,
        isPlay,
        playNext,
        handleRepeat,
        handleShuffle,
        handlePlay,
        handelPlayNext,
        audioRef,
        audioSrc,
        valueTime,
        setValueTime,
        musicUi
      }}
    >
      {children}
    </MyMusicPlayerContext.Provider>
  )
}
function useMyPlayer() {
  const context = useContext(MyMusicPlayerContext)

  if (context === undefined)
    throw new Error('OpenAlbumContext was used outside of DarkModeProvider')
  return context
}

export { MyMusicPLayerProvider, useMyPlayer }