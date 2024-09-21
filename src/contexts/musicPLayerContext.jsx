/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useOpenPlayer } from './openPlayerContext'
import { formatToSecs } from '../helper/formattedDuration'
const MusicPlayerContext = createContext()
function shuffleArray(array) {
  // Filter out any undefined or null items from the array
  const filteredArray = array.filter(
    (item) => item !== undefined && item !== null
  )
  const shuffledArray = [...filteredArray]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

function MusicPLayerProvider({ children }) {
  const { music, isOpenPlayer, filterMusic } = useOpenPlayer()

  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isPlay, setIsPlay] = useState(false)
  const [audioSrc, setAudioSrc] = useState()
  const [valueTime, setValueTime] = useState(0)
  const [playNext, setPlayNext] = useState(false)
  const [playPrev, setPlayPrev] = useState(false)
  const [shuffledMusic, setShuffledMusic] = useState(music)

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
          if (shuffledMusic[currentMusic]) {
            audioRef.current.src = shuffledMusic[currentMusic]?.url
          } else {
            audioRef.current.src = music?.url
          }
          audioRef.current.currentTime = valueTime

          audioRef.current.play()
          // console.log('hbhbh', shuffledMusic[skip])

          if (playNext) {
            //when click on next btn
            setPlayPrev(false)
            if (shuffledMusic[skip]) {
              audioRef.current.src = shuffledMusic[skip]?.url
            } else {
              audioRef.current.src = music?.url
            }
            if (shuffledMusic[skip]) {
              setMusicUi(shuffledMusic[skip])
            } else {
              setMusicUi(music)
            }
            audioRef.current.currentTime = valueTime
            audioRef.current.play()
          }
          if (playPrev) {
            // when user click on prev btn
            setPlayNext(false)
            if (shuffledMusic[prev]) {
              audioRef.current.src = shuffledMusic[prev]?.url
            } else {
              audioRef.current.src = music?.url
            }
            if (shuffledMusic[prev]) {
              setMusicUi(shuffledMusic[prev])
            } else {
              setMusicUi(music)
            }
            audioRef.current.currentTime = valueTime
            audioRef.current.play()
          }

          // Event listener for when the song ends
          audioRef.current.onended = () => {
            // Automatically go to the next song when the current song ends
            setPlayNext(true)
          }
        } else {
          audioRef.current.pause()
          if (playNext) {
            //when click on next btn
            setPlayPrev(false)
            if (shuffledMusic[skip]) {
              audioRef.current.src = shuffledMusic[skip]?.url
            } else {
              audioRef.current.src = music?.url
            }
            if (shuffledMusic[skip]) {
              setMusicUi(shuffledMusic[skip])
            } else {
              setMusicUi(music)
            }
            audioRef.current.currentTime = valueTime
          }
          if (playPrev) {
            //when click on prev btn
            setPlayNext(false)
            if (shuffledMusic[prev]) {
              audioRef.current.src = shuffledMusic[prev]?.url
            } else {
              audioRef.current.src = music?.url
            }
            if (shuffledMusic[prev]) {
              setMusicUi(shuffledMusic[prev])
            } else {
              setMusicUi(music)
            }
            audioRef.current.currentTime = valueTime
          }
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
      playPrev,
      prev,
      filterMusic,
    ]
  )

  useEffect(() => {
    let shuffleTimeout

    if (isShuffle) {
      const formattedToSeconds = formatToSecs(
        filterMusic[currentMusic]?.duration
      )

      shuffleTimeout = setTimeout(() => {
        const shuffledArray = shuffleArray(filterMusic)
        setShuffledMusic([...shuffledArray])
        audioRef.current.currentTime = valueTime
      }, (formattedToSeconds - valueTime) * 1000)
    } else {
      setShuffledMusic(filterMusic)
    }
    // Cleanup the timeout when the effect is re-run or the component is unmounted
    return () => {
      if (shuffleTimeout) {
        clearTimeout(shuffleTimeout)
      }
    }
  }, [isShuffle, filterMusic, currentMusic, valueTime])

  useEffect(() => {
    if (isShuffle) {
      setIsShuffle(false)
      setIsShuffle(true)
      setShuffledMusic(filterMusic)
    }
  }, [ isShuffle,filterMusic])

  useEffect(() => {
    if (isOpenPlayer === true) {
      setIsPlay(true)
      setSkip(currentMusic)
      setMusicUi(music)
      setSkip(currentMusic)
    }
  }, [isOpenPlayer])

  useEffect(() => {
    //when open music player.then start from current time
    if (isOpenPlayer === true) {
      audioRef.current.currentTime = valueTime
    }
  }, [isOpenPlayer])


  useEffect(() => {
    //it back current time to 0 when user click on next btn
    audioRef.current.currentTime = 0
    setValueTime(0)
  }, [playNext, skip])

  useEffect(() => {
    //it back current time to 0 when user click on prev btn
    audioRef.current.currentTime = 0
    setValueTime(0)
  }, [playPrev, skip])

  useEffect(() => {
    if (isRepeat) {
      setValueTime(valueTime)
    }
  }, [isRepeat, valueTime])

  function handleRepeat() {
    setIsRepeat((isRepeat) => !isRepeat)
  }

  function handleShuffle() {
    setIsShuffle((isShuffle) => !isShuffle)
  }

  function handlePlay() {
    setIsPlay((play) => !play)
  }
  function handelPlayNext() {
    setPlayNext(true)
    if (isShuffle) {
      const nextIndex = (skip + 1) % shuffledMusic.length
      setSkip(nextIndex)
      if (skip > allMusiclength) {
        setSkip(0)
      }
    }
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
