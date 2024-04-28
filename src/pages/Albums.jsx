import { Image } from '@nextui-org/react'
import BottomHeader from '../components/BottomHeader'
import Album from '../features/Albums/Album'

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
function Albums() {
  return (
    <>
      <div className='h-[85vh]  '>
        <BottomHeader /> <h1 className='my-4 text-[2rem] '>Recommend music</h1>
        <Album />
      </div>
    </>
  )
}

export default Albums
