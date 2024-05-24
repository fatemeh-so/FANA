import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
function SingerIcons({ singer }) {
  const navigate = useNavigate()
  function handelArtist(id) {
    navigate(`/artist/${id}`)
  }

  return (
    <>
      {' '}
      <h1 className='my-4 text-[2rem]  '>Artist</h1>
      <div className='flex justify-center'>
        <div className=' grid grid-cols-3 gap-[1rem]  lg:gap-[3rem] md:grid-cols-4 xl:grid-cols-5 py-[2rem]'>
          {singer?.map((singer, index) => (
            <div
              key={index}
              className='relative h-[8rem] w-[8rem] md:h-[11rem] md:w-[11rem] xl:h-[18rem] xl:w-[18rem] '
            >
              <img
                src={singer.image}
                onClick={() => {
                  handelArtist(singer.id, singer.title)
                }}
                alt={singer.nickName}
                className='w-full h-[100%] object-cover rounded-full  '
              />
              <div className='text-center absolute top-[9.6rem] xl:top-[20rem] 5 rounded-b-[2rem] bottom-0 left-0 w-full bg-opacity-30 text-white p-2'>
                <p className=' pl-2 text-sm md:text-lg xl:text-xl font-semibold '>
                  {/* {singer.nickName} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SingerIcons
