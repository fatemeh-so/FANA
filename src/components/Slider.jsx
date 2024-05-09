/* eslint-disable react/prop-types */
import { Slider } from '@nextui-org/react'
import { formatDuration, formatToSecs } from '../helper/formattedDuration'
import { useEffect } from 'react'
import { usePlayer } from '../contexts/musicPLayerContext'

export default function Slider1({ duration,songValue }) {
  const formattedDuration = formatDuration(duration)
  const formattedToSeconds = formatToSecs(duration)
  const { valueTime, setValueTime } = usePlayer()
 function handel(value){
  setValueTime(value);
 }

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
