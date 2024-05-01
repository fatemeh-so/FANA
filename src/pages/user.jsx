import { useEffect } from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
import BottomHeader from '../components/BottomHeader'
// import Form from "../../ui/Form";

// Email regex: /\S+@\S+\.\S+/

function User() {
  const navigate = useNavigate()

  const isAuthenticated = true

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate('/login')
      }
    },
    [isAuthenticated]
  )

  return <div className='h-[85vh]  '>
    <BottomHeader icon="user"/>
  </div>
}

export default User
