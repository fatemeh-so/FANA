/* eslint-disable react/prop-types */
import { Slider } from '@nextui-org/react'
import { formatDuration } from '../helper/formattedDuration'

export default function Slider1({ duration }) {

  const formattedDuration = formatDuration(duration)

  

  return (
    <div className='flex'>
      <span className='mr-[1rem] text-white1'>00:00</span>

      <Slider
        size='sm'
        step={0.01}
        maxValue={1}
        minValue={0}
        aria-label='Temperature'
        defaultValue={0.2}
        className='max-w-m[100&]'
      />
      <span className='ml-[1rem] text-white1'>{formattedDuration}</span>
    </div>
  )
}
