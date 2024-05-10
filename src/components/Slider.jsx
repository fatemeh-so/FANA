/* eslint-disable react/prop-types */
import { Slider } from '@nextui-org/react'
import { formatDuration, formatToSecs } from '../helper/formattedDuration'
import { useEffect } from 'react'
import { usePlayer } from '../contexts/musicPLayerContext'
import { useOpenPlayer } from '../contexts/openPlayerContext'

export default function Slider1({  songValue }) {
  const { music } = useOpenPlayer()
  const { valueTime, setValueTime, playNext, playPrev, musicUi } = usePlayer()
 let musicTrack
  // const musicTrack = playNext ? musicUi : music
  if (playPrev || playNext) {
    musicTrack = musicUi
  } else {
    musicTrack = music
  }
  function handel(value) {
    setValueTime(value)
  }
  const formattedDuration = formatDuration(musicTrack?.duration)
  const formattedToSeconds = formatToSecs(musicTrack?.duration)


  return (
    <div className='flex'>
      <Slider
        onChange={handel}
        size='sm'
        value={songValue}
        step={0.01}
        maxValue={formattedToSeconds}
        minValue={0}
        aria-label='Temperature'
        defaultValue={0.2}
        className='max-w-m[100&]'
        endContent={<span className='text-white1'>{formattedDuration}</span>}
        startContent={<span className='text-white1'>00:00</span>}
      />
    </div>
  )
}
