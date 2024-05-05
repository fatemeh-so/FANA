import BottomHeader from '../components/BottomHeader'
import Spinner from '../components/Spinner'
import Album from '../features/Albums/Album';
import SingerIcons from '../features/user/SingerIcons';
import useSinger from '../features/user/useSinger'
// import Form from "../../ui/Form";

// Email regex: /\S+@\S+\.\S+/

function User() {
  const { data: singer, isLoading } = useSinger()
  console.log(singer);
  if (isLoading) return <Spinner />
  return (
    <div className='h-[88vh]  '>
    <BottomHeader icon='user' />
      <SingerIcons singer={singer}/>
    </div>
  )
}

export default User
