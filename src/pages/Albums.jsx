import { Image } from '@nextui-org/react'
import BottomHeader from '../components/BottomHeader'
import Album from '../features/Albums/Album'
import BottomBar from '../components/BottomBar'

const albums = [
  {
    id: 3,
    title: 'album ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
  {
    id: 4,
    title: 'album ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
  {
    id: 3,
    title: 'album ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
  {
    id: 4,
    title: 'album ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
]
const music = [
  {
    id: 3,
    title: 'Lili',
    artist: 'Aaron',
    singerId: 1,
    AlbumId: 1,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/cover.jpg.webp',
    PlayCount: 1,
  },
  {
    id: 4,
    title: 'Falling slowly',
    artist: 'Glen Hansard',
    singerId: 2,
    AlbumId: 2,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    PlayCount: 2,
  },
  {
    id: 5,
    title: 'Caving in',
    artist: 'Syml',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    PlayCount: 2,
  },
  {
    id: 6,
    title: 'love story',
    artist: 'Taylor Swift',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/retro-synthwave-artwork.jpg',
    PlayCount: 2,
  },
]
function Albums() {
  
  return (
    <>
      <div className='h-[85vh]  '>
        
        <Album albums={albums} musics={music} />
      </div>{' '}
      <BottomBar />
    </>
  )
}

export default Albums
