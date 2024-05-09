import { useNavigate } from 'react-router-dom'
import { useUser } from '../features/auth/useUser'
import Spinner from './Spinner'
import { useEffect } from 'react'

function ProtectedRoute({ children }) {
  const { data, isLoading, isAuthenticated } = useUser()
  const navigate = useNavigate()

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/signup')
      }
    },
    [isAuthenticated, isLoading,navigate]
  )

  if (isLoading) return <Spinner />

  if (isAuthenticated) return children
}

export default ProtectedRoute
