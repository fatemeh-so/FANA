/* eslint-disable react/prop-types */
function SingerIcons({singer}) {
    return (
        <>
        <div>
          {/* <BottomHeader to='home' /> */}
          <h1 className='my-4 text-[2rem] '>Artist</h1>
  
          <div className=' grid grid-cols-2 gap-6 lg:gap-[3rem] md:grid-cols-3 xl:grid-cols-4 py-[2rem]'>
            {singer?.map((singer, index) => (
              <div key={index} className='relative h-[10rem] w-[10rem] xl:h-[20rem] xl:w-[20rem] '>
                <img
                  src={singer.image}
                //   onClick={() => {
                    // handelOpenAlbum()
                    // handelAlbum(singer.id,singer.title)
                //   }}
                  alt={singer.nickName}
                  className='w-full h-[100%] object-cover rounded-full  '
                />
                <div className='text-center absolute top-[9.6rem] xl:top-[20rem] 5 rounded-b-[2rem] bottom-0 left-0 w-full bg-opacity-30 text-white p-2'>
                  <p className=' pl-2 text-sm md:text-lg xl:text-xl font-semibold '>
                    {singer.nickName}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* when click on album then AlbumTrack will open */}
          {/* {isOpenAlbum&&<AlbumTrack/>} */}
        </div>
      </>
    )
}

export default SingerIcons
