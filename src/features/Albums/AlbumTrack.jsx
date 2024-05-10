import BottomHeader from '../../components/BottomHeader'
import Spinner from '../../components/Spinner'
import useAlbumTrack from './useAlbumTrack'

import useAlbum from '../../features/Albums/useAlbum'
import { useParams } from 'react-router-dom'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import AlbumMusicChild from './AlbumMusicChild'

function AlbumTrack() {
  const { data: music, isLoading } = useAlbumTrack()
  const { data: albums, isLoading: isAlbum } = useAlbum()
  const { handelMusicOfAlbum } = useOpenPlayer()
  const { albumId } = useParams()
  // Find the album object with id equal to albumId
  const album = albums?.find((album) => album.id === parseInt(albumId))

  if (isLoading || isAlbum) return <Spinner />

  return (
    <>
      <div
        className='h-[85vh]'
        onClick={() => {
          handelMusicOfAlbum(music)
        }}
      >
        <h1 className='mt-[1rem] text-[2rem] text-white1 z-10'>
          {album ? album.title : ''}
        </h1>
        <BottomHeader leftContent={false} to='album' />
        <div>
          {music.map((music) => (
            <AlbumMusicChild key={music.id} music={music} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AlbumTrack
