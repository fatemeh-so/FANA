import BottomBar from '../components/BottomBar'
import Spinner from '../components/Spinner'
import SingerIcons from '../features/artist/SingerIcons'
import useSinger from '../features/artist/useSinger'


function Artist() {
  const { data: singer, isLoading } = useSinger()
  if (isLoading) return <Spinner />
  return (
    <>
    <div className='h-[88vh]  '>
      <SingerIcons singer={singer} />
    </div>
<BottomBar/>
  </>)
}

export default Artist
