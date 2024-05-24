/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useOpenPlayer } from './openPlayerContext'
const MusicPlayerContext = createContext()
function shuffleArray(array) {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

function MusicPLayerProvider({ children }) {
  const { music, isOpenPlayer, filterMusic } = useOpenPlayer()
  // const { data: allMusic, isLoading } = useMusic()
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isPlay, setIsPlay] = useState(false)
  const [audioSrc, setAudioSrc] = useState()
  const [valueTime, setValueTime] = useState(0)
  const [playNext, setPlayNext] = useState(false)
  const [playPrev, setPlayPrev] = useState(false)
  const [shuffledMusic, setShuffledMusic] = useState([])

  const allMusiclength = shuffledMusic?.length - 2
  const [musicUi, setMusicUi] = useState()
  const currentMusic =
    shuffledMusic?.findIndex((item) => item?.id === music?.id) || 0
  const audioRef = useRef(null)
  const [skip, setSkip] = useState(currentMusic)
  const [prev, setPrev] = useState(currentMusic)


  useEffect(
    function play() {
      if (music && audioRef) {
        if (isPlay) {
          // when video is play
          audioRef.current.loop = isRepeat
          audioRef.current.src = shuffledMusic[currentMusic].url
          audioRef.current.currentTime = valueTime
          audioRef.current.play()
      
          if (playNext) {
            //when click on next btn
            audioRef.current.src = shuffledMusic[skip].url
            setMusicUi(shuffledMusic[skip])
            audioRef.current.currentTime = valueTime
            audioRef.current.play()
          }
        } else {
          audioRef.current.pause()
        }
      }
    },

    [
      music,
      isPlay,
      audioRef,
      audioSrc,
      isRepeat,
      valueTime,
      shuffledMusic,
      skip,
      currentMusic,
      playNext,
    ]
  )

  useEffect(() => {
    if (isShuffle) {
      //when shuffle is true
      setShuffledMusic(shuffleArray(filterMusic))  
       audioRef.current.currentTime=valueTime

    } else {
      setShuffledMusic(filterMusic)
    }
  }, [filterMusic, isShuffle])

  // useEffect(() => {
  //   if (!isShuffle) {
  //   }
  // }, [ isShuffle,valueTime])

  useEffect(() => {
    //when open music player.then ...
    setPlayNext(false)
    setMusicUi(music)
  
    // setSkip(currentMusic)
  }, [isOpenPlayer])

  useEffect(() => {
    //when open music player.then start from 0 sec ...
    if (isOpenPlayer === true) {
      setSkip(currentMusic)
    }
  }, [isOpenPlayer])

  useEffect(() => {
    //it back current time to 0 when user click on next btn
    audioRef.current.currentTime = 0
  }, [ playNext, skip])
  useEffect(() => {
    if (playPrev) {
      // when user click on prev btn
      audioRef.current.src = shuffledMusic[prev].url
      setMusicUi(shuffledMusic[prev])
      audioRef.current.play()
    }
  }, [shuffledMusic, playPrev, prev])

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
  function handelPlayPrev() {
    setPlayPrev(true)
    setPrev((s) => s - 1)
    if (prev < 1) {
      setPrev(allMusiclength)
    }
  }
  function playNextFunc() {
    setPlayNext(true)
    setSkip((s) => s + 1)
    if (skip > allMusiclength) {
      setSkip(0)
    }
  }

  return (
    <MusicPlayerContext.Provider
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
        musicUi,
        handelPlayPrev,

        playNextFunc,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}
function usePlayer() {
  const context = useContext(MusicPlayerContext)

  if (context === undefined)
    throw new Error('OpenAlbumContext was used outside of DarkModeProvider')
  return context
}

export { MusicPLayerProvider, usePlayer }
