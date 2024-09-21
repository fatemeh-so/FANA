/* eslint-disable react/prop-types */
import { ScrollShadow } from '@nextui-org/react'
import { DownloadSimple, Plus, Trash, UserSound } from '@phosphor-icons/react'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import { formatDuration } from '../../helper/formattedDuration'
import { useDeletePlaylist } from './useDelete'

function HomeMusicChild({ music, index }) {
  const { id, title, artist, coverArt, duration,url } = music
  const { mutate: deletePlaylist, isLoading } = useDeletePlaylist()
  const { handelPlayMusic } = useOpenPlayer()
  function handelTrash(musicId) {
    deletePlaylist(musicId)
  }
  return (
    <>
      <ScrollShadow hideScrollBar className=''>
        <div
          className='flex items-center'
          onClick={() => {
            handelPlayMusic(music)
          }}
        >
          <span className='ml-2 font-thin'>{index}</span>
          <img
            src={coverArt}
            className='w-[4rem] h-[4rem] m-2 rounded-[1rem]'
          />
          <div className='flex-1'>
            <h1 className='mt-[1.3rem] ml-3 text-[1.1rem]'>{title}</h1>
            <div className='flex text-[.7rem] ml-3'>
              <UserSound size={12} color='#f3e7f4' />
              <p className='mx-2 text-gray-400'>{artist}</p>
            </div>
          </div>
          <div></div>
          <div className='ml-6 text-right text-[.8rem] text-gray300'>
            {formatDuration(duration)}
          </div>
          <div className='ml-6 text-right text-[.8rem] text-gray300'>
          <a href={url}>{<DownloadSimple size={20} color='#f4ecf4' />}</a>
          </div>
          <div
            onClick={() => handelTrash(id)}
            className='ml-6 text-right text-[.8rem] text-gray300'
          >
            <Trash size={20} color='#f4ecf4' />
          </div>
        </div>
      </ScrollShadow>
    </>
  )
}

export default HomeMusicChild
