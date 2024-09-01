import BottomBar from '../components/BottomBar'
import BottomHeader from '../components/BottomHeader'
import Spinner from '../components/Spinner'
import Album from '../features/Albums/Album'
import SingerIcons from '../features/artist/SingerIcons'
import useSinger from '../features/artist/useSinger'
// import Form from "../../ui/Form";

// Email regex: /\S+@\S+\.\S+/

function Artist() {
  const { data: singer, isLoading } = useSinger()
  if (isLoading) return <Spinner />
  return (
    <>
    <div className='h-[88vh]  '>
      {/* <BottomHeader icon='user' /> */}
      <SingerIcons singer={singer} />
    </div>
<BottomBar/>
  </>)
}

export default Artist
