import BottomHeader from '../components/BottomHeader'
function PageNotFound() {
  return (
    <>
      <BottomHeader leftContent={false} />
      <div className='h-[85vh] flex justify-center items-center'>
        <div className='flex text-[1.4rem]'>
          <p> The page you are looking for could not be found 😢</p>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
