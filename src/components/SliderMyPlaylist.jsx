/* eslint-disable react/prop-types */
import { Slider } from '@nextui-org/react'
import {
    convertSecondsToTime,
    formatDuration,
    formatToSecs,
} from '../helper/formattedDuration'
import { useEffect } from 'react'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import { usePlayer } from '../contexts/musicPLayerContext'

export default function SliderMyPlaylist({ songValue = '00:00' }) {
  const { music } = useOpenPlayer()
  const { setValueTime, playNext, playPrev, musicUi } = usePlayer()
  let musicTrack
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

  useEffect(() => {})
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
        startContent={
          <span className='text-white1'>{convertSecondsToTime(songValue)}</span>
        }
      />
    </div>
  )
}
