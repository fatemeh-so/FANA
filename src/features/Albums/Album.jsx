function Album() {
  const albums = [
    {
      id: 1,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 2,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 3,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 4,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 5,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 6,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 7,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 8,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 9,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
    {
      id: 10,
      title: 'album title',
      genre: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      description: 'album description',
    },
  ]
  return (
    <>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {albums.map((albums, index) => (
          <div key={index} className='relative'>
            <img
              src={albums.coverArt}
              alt={albums.title}
              className='w-full h-auto'
            />
            <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2'>
              <p className='text-sm md:text-lg xl:text-xl font-semibold'>{albums.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Album
