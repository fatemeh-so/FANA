import { Outlet } from 'react-router-dom'
import BottomBar from './BottomBar'
import Header from './Header'
import { useDeleteHeader } from '../contexts/deleteHeaderContext'
import { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import  Modal1 from './Modal1'
function AppLayout() {
  const{isOpenPlayer, handelPlayMusic }=useOpenPlayer()

  const { close } = useDeleteHeader()

  return (
    <div className='text-white1    overflow-y-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-gray900 opacity-[94%] w-[100%] h-[100vh]'>
      <div className=' absolute w-[300px] h-[300px] bg-purple-950/40 blur-3xl rounded-full -top-36 -left-36'></div>
      {/* <button
        className='w-[3rem] h-[5rem] bg-pink-900 '
        onClick={handelPlayMusic}
      >
        show
      </button> */}
      {isOpenPlayer?<Modal1/>:""}
      <main className='h-[100vh] w-[100%] '>

        <div className='flex flex-col items-center'>
          {close && <Header />}
          
          <div className='h-[100%] flex flex-col   justify-between w-[90%]  '>
            <Outlet />
            <BottomBar />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout
