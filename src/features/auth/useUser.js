import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../../services/authApi'

export function useUser() {
  const { isLoading, data } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ['user'],
  })
  return { isLoading, isAuthenticated: data?.role === 'authenticated', data }
}
