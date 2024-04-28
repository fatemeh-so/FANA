import { useEffect } from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
// import Form from "../../ui/Form";

// Email regex: /\S+@\S+\.\S+/

function User() {
  const navigate = useNavigate()

  const isAuthenticated = false

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate('/login')
      }
    },
    [isAuthenticated]
  )

  return <div className='h-[85vh]  '></div>
}

export default User
