import { CaretLeft, FolderSimpleUser, Heart, UserCheck, UserCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useOpenAlbum } from '../contexts/openAlbumContext'
import { User } from '@nextui-org/react'

function BottomHeader({ leftContent = true, size, to, icon }) {
  // const [searchParams,setIsOpenAlbum]=useSearchParams()
  const { setIsOpenAlbum } = useOpenAlbum()
  // const[icon1,setIcon]=useState(icon)
  const navigate = useNavigate()
  function handelBack() {
    // back home
    if (to === 'home') {
      navigate('/')
    }
    // back albums
    if (to === 'album') {
      setIsOpenAlbum(false)
      navigate('/albums')
    } 
    // back -1
    else {
      navigate(-1)
    }

    // console.log('-1')
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
        <button
          className={
            size === 'small'
              ? 'flex z-10 mt-[-1rem] items-center justify-center bg-gray-700/60  w-[1.5rem] h-[1.5rem] rounded-[.5rem]'
              : ' flex z-10 items-center justify-center bg-gray-700/60  w-[2.5rem] h-[2.5rem] rounded-[.8rem] '
          }
        >
          {/* <UserCheck size={20} color='#f5f0f5' /> */}
          {icon === 'user' ? (
            <FolderSimpleUser size={21} color='#f5f0f5' />
          ) : (
            <Heart size={20} color='#f5f0f5' />
          )}
        </button>
      )}
    </div>
  )
}

export default BottomHeader
