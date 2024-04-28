import { CaretLeft, Heart } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BottomHeader({ leftContent = true, size, to }) {
  const navigate = useNavigate()
  function handelBack() {
    if (to === 'home') {
      navigate('/home')
    
    }else{
       navigate(-1)
    }
   
    console.log('-1')
  }

  return (
    <div className='flex justify-between  mt-[3rem]  '>
      {' '}
      <button
        onClick={handelBack}
        className={
          size === 'small'
            ? 'flex z-10 mt-[-1rem] items-center justify-center bg-gray-700/60  w-[1.5rem] h-[1.5rem] rounded-[.5rem]'
            : ' flex z-10 items-center justify-center bg-gray-700/60  w-[2.5rem] h-[2.5rem] rounded-[.8rem] '
        }
      >
         {size === 'small' ? (
            <CaretLeft size={15} color='#f4f0f4' />
          ) : (
            <CaretLeft size={20} color='#f4f0f4' />
          )}
      </button>
      {leftContent && (
        <button className=' flex items-center justify-center bg-gray-700/60  w-[2.5rem] h-[2.5rem] rounded-[.8rem] '>
          {size === 'small' ? (
            <Heart size={7} color='#f4f0f4' />
          ) : (
            <Heart size={20} color='#f4f0f4' />
          )}
        </button>
      )}
    </div>
  )
}

export default BottomHeader
